"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import {
  Video,
  FileText,
  Award,
  Download,
  Search,
  BookOpen,
  PlayCircle,
  BadgeCheck,
  Sparkles,
  FolderOpen,
  Eye,
} from "lucide-react";

type ContentItem = {
  id: string;
  title?: string;
  category?: string;
  type?: string;
  fileUrl?: string;
};

export default function StudentContentPage() {

  const [
    content,
    setContent,
  ] = useState<
    ContentItem[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  // FETCH CONTENT
  useEffect(() => {

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

          const contentData:
            ContentItem[] = [];

          querySnapshot.forEach(
            (
              docSnap
            ) => {

              contentData.push({
                id: docSnap.id,
                ...(docSnap.data() as Omit<
                  ContentItem,
                  "id"
                >),
              });
            }
          );

          setContent(
            contentData
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchContent();

  }, []);

  // FILTERED CONTENT
  const filteredContent =
    useMemo(() => {

      return content.filter(
        (item) => {

          const matchesSearch =
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
              );

          const matchesCategory =
            selectedCategory ===
              "All" ||
            item.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );

    }, [
      content,
      search,
      selectedCategory,
    ]);

  // UNIQUE CATEGORIES
  const categories =
    [
      "All",
      ...new Set(
        content.map(
          (item) =>
            item.category
        )
      ),
    ];

  // ICONS
  const getTypeIcon =
    (
      type?: string
    ) => {

      switch (type) {

        case "videos":
          return (
            <Video
              size={28}
            />
          );

        case "certificates":
          return (
            <Award
              size={28}
            />
          );

        case "notes":
          return (
            <BookOpen
              size={28}
            />
          );

        default:
          return (
            <FileText
              size={28}
            />
          );
      }
    };

  return (
    <main className="min-h-screen bg-[#050816] px-6 pb-10 pt-32 text-white md:px-10 md:pt-36">

      <div className="mx-auto max-w-7xl">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-pink-500/10 via-[#0f172a] to-purple-500/10 p-8 shadow-[0_0_60px_rgba(255,79,163,0.08)]">

          {/* GLOW */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">

            {/* LEFT */}
            <div>

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-pink-500/10 text-pink-400">

                <FolderOpen size={40} />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-pink-400">

                Sajshringar Academy
              </p>

              <h1 className="text-4xl font-bold md:text-5xl">

                Student Learning Portal
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">

                Access academy videos,
                notes, PDFs, certificates,
                and premium learning resources.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-pink-500/10 p-4 text-pink-400">

                  <Sparkles size={30} />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">

                    {
                      filteredContent.length
                    }
                  </h2>

                  <p className="text-white/60">

                    Learning Resources
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mt-12">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

          <input
            type="text"
            placeholder="Search videos, notes, PDFs..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full rounded-[1.7rem] border border-white/10 bg-white/5 py-5 pl-14 pr-5 outline-none transition focus:border-pink-500/40"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="mt-8 flex flex-wrap gap-4">

          {categories.map(
            (
              category
            ) => (

              <button
                key={
                  category
                }
                onClick={() =>
                  setSelectedCategory(
                    category ||
                      "All"
                  )
                }
                className={`rounded-full px-5 py-3 text-sm font-medium transition
                ${
                  selectedCategory ===
                  category
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
                    : "border border-white/10 bg-white/5 text-white/70 hover:border-pink-500/20 hover:text-pink-400"
                }`}
              >

                {
                  category
                }
              </button>
            )
          )}
        </div>

        {/* CONTENT */}
        <div className="mt-10">

          {loading ? (

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center text-white/60">

              Loading Content...
            </div>

          ) : filteredContent.length ===
            0 ? (

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center text-white/60">

              No Content Found
            </div>

          ) : (

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredContent.map(
                (
                  item
                ) => (

                  <div
                    key={
                      item.id
                    }
                    className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-pink-500/20"
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
                    <h2 className="text-2xl font-bold">

                      {
                        item.title ||
                        "Untitled"
                      }
                    </h2>

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
                        "Content"
                      }
                    </div>

                    {/* VIDEO */}
                    {item.type ===
                    "videos" ? (

                      <div className="mt-6">

                        <video
                          controls
                          className="w-full rounded-2xl border border-white/10"
                        >

                          <source
                            src={
                              item.fileUrl
                            }
                          />
                        </video>

                        <div className="mt-4 flex gap-3">

                          <a
                            href={
                              item.fileUrl
                            }
                            target="_blank"
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-500/10 px-4 py-3 text-sm text-blue-400 transition hover:bg-blue-500/20"
                          >

                            <PlayCircle
                              size={
                                18
                              }
                            />

                            Watch
                          </a>

                          <a
                            href={
                              item.fileUrl
                            }
                            download
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500/10 px-4 py-3 text-sm text-green-400 transition hover:bg-green-500/20"
                          >

                            <Download
                              size={
                                18
                              }
                            />

                            Download
                          </a>
                        </div>
                      </div>

                    ) : (

                      <div className="mt-6 flex gap-3">

                        {/* OPEN */}
                        <a
                          href={
                            item.fileUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-500/10 px-4 py-3 text-sm text-blue-400 transition hover:bg-blue-500/20"
                        >

                          <Eye size={18} />

                          Open
                        </a>

                        {/* DOWNLOAD */}
                        <a
                          href={
                            item.fileUrl
                          }
                          download
                          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                        >

                          <Download
                            size={18}
                          />

                          Download
                        </a>
                      </div>
                    )}
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

              Premium Student Learning Experience
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-pink-500/10 px-5 py-3 text-sm text-pink-400">

            <Sparkles size={18} />

            Student Access Active
          </div>
        </div>
      </div>
    </main>
  );
}