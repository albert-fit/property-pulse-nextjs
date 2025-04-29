'use client';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    Emailicon,
} from 'react-share';

import React from 'react';
import {FaShare} from "react-icons/fa";

const ShareButtons = ({property}) => {

    const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
    return (
        <>
            <h3 class="text-xl font-bold text-center pt-2">Share This Property:
                <div class="flex gap-3 justify-center pb-5">
                    <FacebookShareButton url={shareUrl} quote={property.name}
                                         hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}>
                        <FacebookIcon size={40} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={property.name}
                                        hashtags={`#${property.type.replace(/\s/g, '')}ForRent`}>
                        <TwitterIcon size={40} round={true}/>
                    </TwitterShareButton>
                </div>
            </h3>
        </>
    );
};

export default ShareButtons;