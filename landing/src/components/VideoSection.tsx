import React from 'react';
export default function VideoSection() {
  return (
    <section className="w-full flex justify-center py-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <video src="/demo.mp4" controls className="w-full h-auto" />
      </div>
    </section>
  );
}
