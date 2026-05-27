'use client'

export default function MonitoringUpload() {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-2 text-3xl font-bold">
        Monitoring Upload
      </h2>

      <p className="mb-6 text-gray-500">
        Upload Excel monitoring file
      </p>

      <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 p-12 transition hover:border-black">
        <p className="text-lg font-medium">
          Click to upload Excel
        </p>

        <p className="mt-2 text-sm text-gray-500">
          XLSX / XLS supported
        </p>

        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}