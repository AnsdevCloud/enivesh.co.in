import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import MarkerTool from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import LinkTool from '@editorjs/link';
import fb from '../../Firebase/FireConfig';
const storage = fb.storage();
const MyTextEditor = ({ className, data, onChange }) => {

    const editorInstance = useRef(null);
    // Function to upload image to Firebase Storage
    const uploadImageToFirebase = async (file) => {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`images/${file.name}`);
        try {
            const snapshot = await imageRef.put(file);
            const downloadUrl = await snapshot.ref.getDownloadURL();
            return { success: 1, file: { url: downloadUrl } };
        } catch (error) {
            console.error('Error uploading image to Firebase Storage:', error);
            return { success: 0, error: { message: 'Upload failed' } };
        }
    };

    useEffect(() => {
        if (editorInstance.current === null) {
            editorInstance.current = new EditorJS({
                placeholder: "Write your contents here .....",
                holder: 'editorjs',
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true,

                    },
                    list: {
                        class: List,
                        inlineToolbar: true
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true,
                        config: {
                            preserveBlank: true,
                            customClass: 'custom-paragraph-class',
                        },
                    },
                    marker: {
                        class: MarkerTool,
                        inlineToolbar: true
                    },
                    linkTool: {
                        class: LinkTool,
                        inlineToolbar: true,
                        config: {
                            defaultTarget: '_blank', // Set default target attribute to _blank
                            endpoint: '/api/fetch-link-preview',

                        },
                    },
                    image: {
                        class: ImageTool,
                        inlineToolbar: true,
                        config: {
                            uploader: {
                                uploadByFile(file) {
                                    return uploadImageToFirebase(file);
                                },
                                uploadByUrl(url) {
                                    return { success: 1, file: { url } }; // Directly return URL as file object
                                },
                            },
                        },
                    },


                },
                data: data,
                onChange: async () => {
                    const content = await editorInstance.current.save();
                    onChange(content);
                },
                onReady: () => {
                    const headers = document.querySelectorAll('.ce-header');
                    headers.forEach((header) => header.classList.add('custom-header'));

                    const lists = document.querySelectorAll('.ce-list');
                    lists.forEach((list) => list.classList.add('custom-list'));

                    const paragraphs = document.querySelectorAll('.ejs-paragraph');
                    paragraphs.forEach((paragraph) => paragraph.classList.add('custom-paragraph'));
                },
            });
        }

        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, []);


    return <div id="editorjs" className={className}></div>;
};

export default MyTextEditor;
