"use client";

import { useState } from "react";
import Image from "next/image";
import { reviews, videoStories, type Review, type VideoStory } from "@/lib/data";
import { IconClose, IconPlay, IconStar } from "./icons";
import CardCarousel, { type CardCarouselApi } from "./CardCarousel";

const SLIDE_INTERVAL_MS = 4000;

function VideoThumb({
  video,
  onPlay,
  priority = false,
}: {
  video: VideoStory;
  onPlay: (id: string) => void;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(video.youtubeId)}
      aria-label={`Play video: ${video.caption}`}
      className="group relative aspect-[9/16] w-full shrink-0 overflow-hidden rounded-2xl bg-navy shadow-soft"
    >
      <Image
        src={video.thumbnail}
        alt={video.caption}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, 280px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110">
          <IconPlay className="ml-1 size-5 fill-accent" />
        </span>
      </span>
    </button>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-line bg-white p-3.5 shadow-soft">
      <div className="mb-2 flex items-center gap-2.5">
        <div className="flex size-8.5 shrink-0 items-center justify-center rounded-full bg-cloud text-[13px] font-extrabold text-navy">
          {review.initial}
        </div>
        <div>
          <div className="text-[13px] font-bold text-navy">{review.name}</div>
          <div className="flex gap-0.5 text-[#F2A600]">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="size-2.5 fill-[#F2A600] stroke-[#F2A600]" />
            ))}
          </div>
          <span className="block text-[10.5px] text-ink-soft">{review.time}</span>
        </div>
      </div>
      <p className="text-[11px] leading-relaxed text-ink-soft sm:text-[12.5px]">
        {review.parts.map((part, i) =>
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
  );
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [videoApi, setVideoApi] = useState<CardCarouselApi | null>(null);
  const [reviewApi, setReviewApi] = useState<CardCarouselApi | null>(null);
  const activeStory = videoStories.find((v) => v.youtubeId === activeVideo);

  return (
    <section id="testimonials" className="bg-cloud py-7 sm:py-9 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">Real Results</span>
        <h2 className="mt-1.5 text-[26px] leading-tight sm:text-3xl lg:text-4xl">Hear It From Our Patients</h2>

        {/* Videos: continuous-loop single card below lg, 3-card carousel at lg+ */}
        <div className="mx-auto mt-5 w-full sm:max-w-xs lg:hidden">
          <CardCarousel
            items={videoStories}
            getKey={(v) => v.youtubeId}
            visible={1}
            showEmphasis={false}
            autoplayDelay={SLIDE_INTERVAL_MS}
            paused={!!activeVideo}
            onActiveChange={setSlideIndex}
            onReady={setVideoApi}
            renderItem={(v, i) => <VideoThumb video={v} onPlay={setActiveVideo} priority={i === 0} />}
          />
        </div>

        <div className="mt-3 flex justify-center gap-1.5 lg:hidden">
          {videoStories.map((video, i) => (
            <button
              key={video.youtubeId}
              type="button"
              onClick={() => videoApi?.goTo(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === slideIndex ? "w-5 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 hidden lg:block">
          <CardCarousel
            items={videoStories}
            getKey={(v) => v.youtubeId}
            paused={!!activeVideo}
            renderItem={(v, i) => <VideoThumb video={v} onPlay={setActiveVideo} priority={i === 0} />}
          />
        </div>

        {/* Reviews: continuous-loop single card below lg, 3-card carousel at lg+ */}
        <div className="mx-auto mt-5 w-full sm:max-w-xs lg:hidden">
          <CardCarousel
            items={reviews}
            getKey={(r) => r.name}
            visible={1}
            showEmphasis={false}
            autoplayDelay={SLIDE_INTERVAL_MS}
            onActiveChange={setReviewIndex}
            onReady={setReviewApi}
            renderItem={(r) => <ReviewCard review={r} />}
          />
        </div>

        <div className="mt-3 flex justify-center gap-1.5 lg:hidden">
          {reviews.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => reviewApi?.goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === reviewIndex ? "w-5 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 hidden lg:block">
          <CardCarousel items={reviews} getKey={(r) => r.name} renderItem={(r) => <ReviewCard review={r} />} />
        </div>
      </div>

      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative aspect-[9/16] w-full max-h-[85vh] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <IconClose className="size-5" />
            </button>
            <div className="size-full overflow-hidden rounded-2xl shadow-lifted">
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
