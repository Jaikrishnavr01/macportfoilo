import { WindowControls } from '#components';
import { blogPosts } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelBottom, Plus, Search, Share, ShieldHalf } from 'lucide-react';
import React, { useState } from 'react';

const Safari = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <>
            <div id='window-header'>
                <WindowControls target="safari" />
                <PanelBottom className='ml-10 icon' />

                <div className='flex items-center gap-1 ml-5'>
                    <ChevronLeft className='icon' onClick={() => setSelectedPost(null)} />
                    <ChevronRight className='icon' />
                </div>

                <div className='flex-1 flex-center gap-3'>
                    <ShieldHalf className='icon' />
                    <div className='search'>
                        <Search className='icon' />
                        <input
                            type='text'
                            placeholder={selectedPost ? selectedPost.link : 'search or enter website name'}
                            className='flex-1'
                        />
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>
            </div>

            <div className='blog'>
                <h2>{selectedPost ? selectedPost.title : "My Recent Works"}</h2>
                <div className='space-y-8'>
                    {!selectedPost && blogPosts.map(({ id, image, title, date, link }) => (
                        <div key={id} className='blog-post'>
                            <div className='col-span-2'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                {/* <p>{date}</p> */}
                                <h3>{title}</h3>
                                <a onClick={() => setSelectedPost({ title, link })} style={{ cursor: 'pointer' }}>Click here to visit <MoveRight className='icon-hover' /></a>
                            </div>
                        </div>
                    ))}

                    {selectedPost && (
                        <iframe
                            src={selectedPost.link}
                            title={selectedPost.title}
                            className='w-full h-[75vh] border-none rounded-lg'
                        />
                    )}
                </div>
            </div>
        </>
    );
}

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;
