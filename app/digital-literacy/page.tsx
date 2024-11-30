export default function DigitalLiteracyPage() {
  return (
    <div>
      <h1 className="font-bold text-5xl mt-8 text-primary">Digital Literacy</h1>
      <h2 className="text-4xl font-bold text-black mb-8">Get started with Google Suite</h2>
      <div className="flex flex-col md:grid grid-cols-2 w-full gap-8 md:gap-16">
        <div>
          <div className="text-3xl font-bold">How to use Google Classroom</div>
          <div className="text-xl">Google Classroom basics: How to find your assignments, turn in work, and keep up with your class.</div>
        </div>
        <div className="bg-primary p-2">
          <video src="/gclassroom.mov" controls className="size-full"></video>
        </div>
        <div>
          <div className="text-3xl font-bold">How to use Google Drive</div>
          <div className="text-xl">Get started with Google Drive! Learn how to upload, organize, and share your files easily.</div>
        </div>
        <div className="bg-primary p-2">
          <video src="/gdrive.mov" controls className="size-full"></video>
        </div>
        <div>
          <div className="text-3xl font-bold">How to use Google Slides</div>
          <div className="text-xl">New to Google Slides? Here&apos;s a simple walkthrough on making and sharing your first presentation.</div>
        </div>
        <div className="bg-primary p-2">
          <video src="/gslides.mov" controls className="size-full"></video>
        </div>
      </div>
    </div>
  );
}