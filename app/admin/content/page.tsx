"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import toast from "react-hot-toast";

import {
  Upload,
  FileText,
  Video,
  FileBadge,
  Search,
  Trash2,
  Sparkles,
  BookOpen,
  FolderOpen,
  Download,
  Eye,
  ImageIcon,
  BadgeCheck,
} from "lucide-react";

type ContentItem = {
  id: string;
  title?: string;
  category?: string;
  type?: string;
  fileUrl?: string;
  createdAt?: any;
};

export default function AdminContentPage() {

  const [
    title,
    setTitle,
  ] = useState("");

  const [
    category,
    setCategory,
  ] = useState("");

  const [
    type,
    setType,
  ] = useState("");

  const [
    file,
    setFile,
  ] = useState<File | null>(
    null
  );

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    content,
    setContent,
  ] = useState<
    ContentItem[]
  >([]);

  const [
    search,
    setSearch,
  ] = useState("");

  // FETCH CONTENT
  const fetchContent =
    async () => {

      try {

        const querySnapshot =
          await getDocs(
            collection(
              db,
              "content"
            )
          );

        const data:
          ContentItem[] = [];

        querySnapshot.forEach(
          (
            docSnap
          ) => {

            data.push({
              id: docSnap.id,
              ...(docSnap.data() as Omit<
                ContentItem,
                "id"
              >),
            });
          }
        );

        setContent(data);

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to load content"
        );
      }
    };

  useEffect(() => {

    fetchContent();

  }, []);

  // UPLOAD
  const handleUpload =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      if (!file) {

        toast.error(
          "Please select file"
        );

        return;
      }

      try {

        setLoading(true);

        // FORM DATA
        const formData =
          new FormData();

        formData.append(
          "file",
          file
        );

        // API
        const uploadRes =
          await fetch(
            "/api/upload",
            {
              method:
                "POST",
              body:
                formData,
            }
          );

        const uploadData =
          await uploadRes.json();

        if (
          !uploadData.secure_url
        ) {

          throw new Error(
            "Upload failed"
          );
        }

        // SAVE FIRESTORE
        await addDoc(
          collection(
            db,
            "content"
          ),
          {
            title,
            category,
            type,
            fileUrl:
              uploadData.secure_url,
            createdAt:
              new Date(),
          }
        );

        toast.success(
          "Content Uploaded Successfully"
        );

        // RESET
        setTitle("");
        setCategory("");
        setType("");
        setFile(null);

        fetchContent();

      } catch (error) {

        console.log(error);

        toast.error(
          "Upload Failed"
        );

      } finally {

        setLoading(false);
      }
    };

  // DELETE
  const handleDelete =
    async (
      id: string
    ) => {

      const confirmDelete =
        confirm(
          "Delete this content?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteDoc(
          doc(
            db,
            "content",
            id
          )
        );

        toast.success(
          "Content Deleted"
        );

        fetchContent();

      } catch (error) {

        console.log(error);

        toast.error(
          "Delete Failed"
        );
      }
    };

  // FILTER
  const filteredContent =
    useMemo(() => {

      return content.filter(
        (item) =>
          (
            item.title ||
            ""
          )
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          (
            item.category ||
            ""
          )
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          (
            item.type ||
            ""
          )
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [
      content,
      search,
    ]);

  // ICON
  const getTypeIcon =
    (
      type?: string
    ) => {

      switch (type) {

        case "videos":
          return (
            <Video
              size={24}
            />
          );

        case "pdfs":
          return (
            <FileText
              size={24}
            />
          );

        case "notes":
          return (
            <BookOpen
              size={24}
            />
          );

        case "certificates":
          return (
            <FileBadge
              size={24}
            />
          );

        default:
          return (
            <ImageIcon
              size={24}
            />
          );
      }
    };

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-purple-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

            <div>

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pink-500/10 text-pink-400">

                <Upload size={40} />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

                Sajshringar Academy
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">

                Content Management
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

                Upload videos, PDFs, notes,
                certificates, and learning resources
                for academy students.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-purple-500/10 p-4 text-purple-400">

                  <FolderOpen size={30} />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    {
                      content.length
                    }
                  </h2>

                  <p className="text-white/60">

                    Uploaded Files
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={
            handleUpload
          }
          className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-8"
        >

          <div className="grid gap-8 md:grid-cols-2">

            {/* TITLE */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Content Title
              </label>

              <input
                type="text"
                required
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                placeholder="Enter title"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-pink-500/40"
              />
            </div>

            {/* CATEGORY */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Category
              </label>

              <select
                required
                value={
                  category
                }
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-[#0b1020] px-5 py-4 outline-none transition focus:border-pink-500/40"
              >

                <option value="">
                  Select Category
                </option>

                <option value="Makeup">
                  Makeup
                </option>

                <option value="Aari Work">
                  Aari Work
                </option>

                <option value="Jewellery">
                  Jewellery
                </option>

                <option value="Training">
                  Training
                </option>
              </select>
            </div>

            {/* TYPE */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Content Type
              </label>

              <select
                required
                value={type}
                onChange={(e) =>
                  setType(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-[#0b1020] px-5 py-4 outline-none transition focus:border-pink-500/40"
              >

                <option value="">
                  Select Type
                </option>

                <option value="videos">
                  Video
                </option>

                <option value="pdfs">
                  PDF
                </option>

                <option value="notes">
                  Notes
                </option>

                <option value="certificates">
                  Certificate
                </option>
              </select>
            </div>

            {/* FILE */}
            <div>

              <label className="mb-3 block text-sm font-medium text-white/70">

                Upload File
              </label>

              <input
                type="file"
                required
                onChange={(e) =>
                  setFile(
                    e.target
                      .files?.[0] ||
                      null
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-[14px] file:mr-4 file:rounded-full file:border-0 file:bg-pink-500 file:px-4 file:py-2 file:text-white"
              />
            </div>
          </div>

          {/* FILE PREVIEW */}
          {file && (

            <div className="mt-8 rounded-2xl border border-pink-500/20 bg-pink-500/5 p-5">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-pink-500/10 p-3 text-pink-400">

                  <FileText size={24} />
                </div>

                <div>

                  <h3 className="font-semibold">

                    {file.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/50">

                    {(
                      file.size /
                      1024 /
                      1024
                    ).toFixed(
                      2
                    )}{" "}
                    MB
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-5 text-lg font-semibold transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(255,79,163,0.35)]"
          >

            <Upload size={22} />

            {loading
              ? "Uploading..."
              : "Upload Content"}
          </button>
        </form>

        {/* SEARCH */}
        <div className="relative mt-14">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

          <input
            type="text"
            placeholder="Search content..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full rounded-[1.7rem] border border-white/10 bg-white/5 py-5 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
          />
        </div>

        {/* CONTENT GRID */}
        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-7">

            <div>

              <h2 className="text-2xl font-bold">

                Uploaded Content
              </h2>

              <p className="mt-1 text-sm text-white/50">

                Student accessible learning resources
              </p>
            </div>

            <span className="rounded-full bg-white/5 px-5 py-2 text-sm text-white/60">

              {
                filteredContent.length
              } Files
            </span>
          </div>

          {filteredContent.length ===
          0 ? (

            <div className="p-12 text-center text-white/60">

              No Content Uploaded
            </div>

          ) : (

            <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-3">

              {filteredContent.map(
                (
                  item
                ) => (

                  <div
                    key={item.id}
                    className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-500/20"
                  >

                    {/* ICON */}
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400">

                      {
                        getTypeIcon(
                          item.type
                        )
                      }
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold">

                      {
                        item.title ||
                        "Untitled"
                      }
                    </h3>

                    {/* CATEGORY */}
                    <p className="mt-2 text-pink-400">

                      {
                        item.category ||
                        "General"
                      }
                    </p>

                    {/* TYPE */}
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">

                      <BadgeCheck size={16} />

                      {
                        item.type ||
                        "File"
                      }
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-6 flex gap-3">

                      {/* VIEW */}
                      <a
                        href={
                          item.fileUrl
                        }
                        target="_blank"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-500/10 px-4 py-3 text-sm text-blue-400 transition hover:bg-blue-500/20"
                      >

                        <Eye size={18} />

                        View
                      </a>

                      {/* DOWNLOAD */}
                      <a
                        href={
                          item.fileUrl
                        }
                        download
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500/10 px-4 py-3 text-sm text-green-400 transition hover:bg-green-500/20"
                      >

                        <Download size={18} />

                        Download
                      </a>
                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        handleDelete(
                          item.id
                        )
                      }
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-red-500/10 px-5 py-3 text-sm text-red-400 transition hover:bg-red-500/20"
                    >

                      <Trash2 size={18} />

                      Delete Content
                    </button>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6">

          <div>

            <h2 className="text-xl font-bold">

              Sajshringar Academy
            </h2>

            <p className="mt-2 text-sm text-white/60">

              Professional Beauty Learning Management System
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-pink-500/10 px-5 py-3 text-sm text-pink-400">

            <Sparkles size={18} />

            Premium Content Portal
          </div>
        </div>
      </div>
    </main>
  );
}