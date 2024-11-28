"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { foto1, foto2, foto3, fotoBakeuda } from "@/lib/image";

export default function PageCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
    );

    // Data dummy foto
    const dummyPhotos = [
        { imageUrl: foto1, altText: "Photo 1", link: "/" },
        { imageUrl: foto2, altText: "Photo 2", link: "/" },
        { imageUrl: foto3, altText: "Photo 3", link: "/" },
    ];

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto sm:p-2"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent>
                {/* Render foto dari dummyPhotos */}
                {dummyPhotos.map((photo, index) => (
                    <CarouselItem key={index}>
                        <Link href={photo.link}>
                            <Card>
                                <CardContent className="relative w-full aspect-[6/3]">
                                    <Image
                                        src={photo.imageUrl}
                                        alt={photo.altText}
                                        fill
                                        className="object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
        </Carousel>
    );
}
