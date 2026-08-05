"use client";

import { useState } from "react";
import Image from "next/image";
import { videoStories } from "@/lib/data";
import { IconPlay } from "./icons";

export default function PatientStories() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Patient Stories</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Real Recovery Stories</h2>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Hear directly from patients who got their movement, and their lives, back.
        </p>
      </div>

      <div className="no-scrollbar mt-5 flex gap-3 overflow-x-auto px-4 pb-2 sm:px-6 lg:mx-auto lg:mt-8 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-8">
        {videoStories.map((video) => {
          const isPlaying = playingId === video.youtubeId;
          return (
            <div
              key={video.youtubeId}
              className="relative aspect-video w-[250px] shrink-0 overflow-hidden rounded-2xl bg-navy shadow-soft lg:w-auto"
            >
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayingId(video.youtubeId)}
                  aria-label={`Play video: ${video.caption}`}
                  className="group absolute inset-0 size-full"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, 250px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-105">
                      <IconPlay className="ml-0.5 size-3 fill-accent" />
                    </span>
                    <span className="text-left text-[12px] font-bold leading-tight text-white">{video.caption}</span>
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex justify-center gap-1.5 lg:hidden">
        <span className="size-1.5 rounded-full bg-line" />
        <span className="size-1.5 rounded-full bg-line" />
        <span className="size-1.5 rounded-full bg-line" />
      </div>
    </section>
  );
}
