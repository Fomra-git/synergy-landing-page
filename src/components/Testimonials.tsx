"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reviews, videoStories } from "@/lib/data";
import { IconClose, IconPlay, IconStar } from "./icons";

const SLIDE_INTERVAL_MS = 4000;

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsVisible, setReviewsVisible] = useState(2);
  const activeStory = videoStories.find((v) => v.youtubeId === activeVideo);
  const maxReviewIndex = Math.max(0, reviews.length - reviewsVisible);

  useEffect(() => {
    if (activeVideo) return;
    const timer = setInterval(() => {
      setSlideIndex((i) => (i + 1) % videoStories.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [activeVideo]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => {
      setReviewsVisible(mq.matches ? 2 : 1);
      setReviewIndex(0);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((i) => (i + 1) % (maxReviewIndex + 1));
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [maxReviewIndex]);

  return (
    <section id="testimonials" className="bg-cloud py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Real Results</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Hear It From Our Patients</h2>

        <div className="mx-auto mt-5 w-full max-w-[280px] overflow-hidden rounded-2xl shadow-soft sm:max-w-xs lg:mt-8 lg:max-w-sm">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {videoStories.map((video) => (
              <button
                key={video.youtubeId}
                type="button"
                onClick={() => setActiveVideo(video.youtubeId)}
                aria-label={`Play video: ${video.caption}`}
                className="group relative aspect-square w-full shrink-0 overflow-hidden bg-navy"
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.caption}
                  fill
                  sizes="(min-width: 1024px) 384px, 280px"
                  className="origin-top scale-[1.7] object-cover transition-transform duration-300 group-hover:scale-[1.8]"
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-105">
                    <IconPlay className="ml-0.5 size-3 fill-accent" />
                  </span>
                  <span className="line-clamp-2 text-left text-[12px] font-bold leading-tight text-white">
                    {video.caption}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center gap-1.5">
          {videoStories.map((video, i) => (
            <button
              key={video.youtubeId}
              type="button"
              onClick={() => setSlideIndex(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === slideIndex ? "w-5 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>

        <div className="mx-auto mt-5 w-full overflow-hidden sm:max-w-xl lg:mt-8 lg:max-w-3xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${reviewIndex * (100 / reviewsVisible)}%)` }}
          >
            {reviews.map((r) => (
              <div key={r.name} className="flex w-full shrink-0 px-1.5 sm:w-1/2 sm:px-2">
                <div className="flex w-full flex-col rounded-2xl border border-line bg-white p-3.5 shadow-soft">
                  <div className="mb-2 flex items-center gap-2.5">
                    <div className="flex size-8.5 shrink-0 items-center justify-center rounded-full bg-cloud text-[13px] font-extrabold text-navy">
                      {r.initial}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-navy">{r.name}</div>
                      <div className="flex gap-0.5 text-[#F2A600]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IconStar key={i} className="size-2.5 fill-[#F2A600] stroke-[#F2A600]" />
                        ))}
                      </div>
                      <span className="block text-[10.5px] text-ink-soft">{r.time}</span>
                    </div>
                  </div>
                  <p className="text-[11px] leading-relaxed text-ink-soft sm:text-[12.5px]">
                    {r.parts.map((part, i) =>
                      part.highlight ? (
                        <span key={i} className="underline decoration-red-500 decoration-2 underline-offset-2">
                          {part.text}
                        </span>
                      ) : (
                        <span key={i}>{part.text}</span>
                      ),
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center gap-1.5">
          {Array.from({ length: maxReviewIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setReviewIndex(i)}
              aria-label={`Go to review page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === reviewIndex ? "w-5 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>

      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <IconClose className="size-5" />
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl shadow-lifted">
              <iframe
                src={`https://www.youtube.com/embed/${activeStory.youtubeId}?autoplay=1&rel=0`}
                title={activeStory.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
