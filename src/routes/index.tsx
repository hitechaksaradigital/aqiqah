import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import heroImg from "@/assets/hero-new.jpg";
import aboutB from "@/assets/about-b.jfif";
import aboutC from "@/assets/about-c.jfif";
import aboutD from "@/assets/about-d.jfif";
import qurbanImg from "@/assets/paket-qurban.jpg";
import aqiqahImg from "@/assets/paket-aqiqah.jpg";

export const Route = createFileRoute("/")({component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className={`glass-nav ${scrolled ? "scrolled" : ""} fixed top-0 inset-x-0 z-50`}>
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl font-bold tracking-tight">
            Bang <span style={{ color: "var(--gold)" }}>Yadi</span>
          </a>
          

          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            <li><a href="#qurban" className="nav-link">QURBAN</a></li>
            <li><a href="#aqiqah" className="nav-link">AQIQAH</a></li>
            <li><a href="#tentang" className="nav-link">TENTANG KAMI</a></li>
            <li><a href="#testimoni" className="nav-link">TESTIMONI</a></li>
            <li><a href="#kontak" className="nav-link">KONTAK</a></li>
          </ul>
          <div className="flex items-center gap-2">
<a href="https://www.youtube.com/@bangyadijualkambing4604" target="_blank" rel="noreferrer" className="youtube-btn text-sm" title="YouTube Bang Yadi">
  <div className="relative w-6 h-6 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-red-600 bg-opacity-20"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-600 relative z-10"><path d="M8 5v14l11-7z"/></svg>
  </div>
</a>
            <a href="#kontak" className="btn-gold text-sm hidden sm:inline-block">Pesan Sekarang</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Kambing dan domba premium di peternakan Bang Yadi"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(15,40,15,0.85) 0%, rgba(15,40,15,0.55) 45%, rgba(15,40,15,0.15) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-white">
          <p
            className="uppercase tracking-[0.3em] text-xs mb-6"
            style={{ color: "var(--gold-soft)" }}
            data-aos="fade-up"
          >
            Amanah & Profesional
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold leading-[1.03] max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Ibadah Qurban & Aqiqah,
            <br />
            <span style={{ color: "var(--gold-soft)" }}>mudah, berkah, dan sesuai syariat.</span>
          </h1>
          <p
            className="mt-8 max-w-xl text-base md:text-lg text-white/85 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            kami menghadirkan hewan qurban dan aqiqah berkualitas untuk masyarakat tangerang selatan dan sekitar nya - yukkk kepoin dan tanyakan paket nya
          </p>
          <div className="mt-10 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="240">
<a href="https://wa.me/628557210835" className="btn-gold">
              Pesan via WhatsApp
            </a>
            <a href="#qurban" className="btn-ghost-light">Lihat Katalog</a>
          </div>
        </div>
      </section>

      {/* USP */}
      <section id="tentang" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p className="uppercase text-xs tracking-[0.3em]" style={{ color: "var(--emerald-deep)" }}>
              Amanah & Profesional
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Keunggulan Bang Yadi</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sesuai syariat — sehat terjamin — gratis ongkir pengiriman aman tanpa biaya tambahan untuk wilayah Tangerang Selatan.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3" data-aos="fade-left">
            <img src={aboutB} alt="Peternakan Bang Yadi" className="rounded-xl w-full h-32 object-cover shadow-lg" loading="lazy" />
            <img src={aboutC} alt="Hewan qurban sehat" className="rounded-xl w-full h-32 object-cover shadow-lg" loading="lazy" />
            <img src={aboutD} alt="Pengiriman aqiqah" className="rounded-xl w-full h-32 object-cover shadow-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* KATALOG */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">Layanan Kami</h2>
            <div className="gold-divider" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dua paket utama untuk memenuhi kebutuhan ibadah keluarga Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: "qurban",
                img: qurbanImg,
                title: "Paket Qurban",
                desc: "Kambing dan Domba pilihan dengan sertifikat kesehatan resmi dan bobot yang transparan.",
                cta: "Cek Harga Qurban",
              },
              {
                id: "aqiqah",
                img: aqiqahImg,
                title: "Layanan Aqiqah",
                desc: "Paket masak/box eksklusif dengan menu lezat, porsi mantap, dan pengolahan yang higienis.",
                cta: "Lihat Paket Aqiqah",
              },
            ].map((p, i) => (
              <article
                key={p.id}
                id={p.id}
                className="product-card relative rounded-3xl overflow-hidden bg-card cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 30%, rgba(15,40,15,0.95) 100%)",
                      }}
                    />
                    <div className="absolute bottom-0 p-7 text-white">
                      <h3 className="font-display text-3xl font-bold mb-2">{p.title}</h3>
                      <p className="text-sm text-white/85 mb-4 max-w-md">{p.desc}</p>
                      <span className="btn-gold inline-block text-sm">{p.cta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Harga murah, utamakan kualitas - bisa nego & langsung lihat ke kandang.
            </p>
          </div>
      </section>

      {/* TESTIMONI */}
      <section
        id="testimoni"
        className="py-24 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #1f4a1a 0%, #2d5a27 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold">Apa Kata Mereka?</h2>
            <div className="gold-divider !mx-0" />
            <p className="text-white/80 mt-3">
              Banyak keluarga yang telah mempercayakan qurban & aqiqah mereka kepada kami.
            </p>
          </div>
          {[
            { q: "Mantap domba domba nya bagus bagus.", a: "— @adebowo6156" },
            { q: "Pedagang ramah dan tempat ny bersih kambing atau domba nya terawat", a: "— @haji.muhidin4308" },
          ].map((t, i) => (
            <blockquote
              key={i}
              className="bg-white/5 backdrop-blur rounded-2xl p-7 border border-white/10"
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
            >
              <div style={{ color: "var(--gold-soft)" }} className="mb-3 text-lg">★★★★★</div>
              <p className="italic text-white/90 leading-relaxed">"{t.q}"</p>
              <footer className="mt-4 text-sm text-white/70">{t.a}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* MAPS / KONTAK */}
      <section id="kontak" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold">Kunjungi Kandang Kami</h2>
            <div className="gold-divider !mx-0" />
<p className="mt-4 text-muted-foreground max-w-md">
              Jl. Dr. Setia Budi No.1, Pondok Kacang Timur, Pondok Aren, Tangerang Selatan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://wa.me/628557210835" className="btn-gold">Chat WhatsApp</a>
              <a
                href="https://maps.google.com/?q=Pondok+Aren+Tangerang+Selatan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium transition hover:bg-muted"
                style={{ borderColor: "var(--emerald-deep)", color: "var(--emerald-deep)" }}
              >
                Buka Google Maps →
              </a>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            data-aos="fade-left"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.1)";
            }}
          >
            <iframe
              title="Lokasi Bang Yadi"
              src="https://www.google.com/maps?q=Pondok+Aren+Tangerang+Selatan&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="text-white px-6 pt-16 pb-8"
        style={{ background: "linear-gradient(135deg, #1a3815 0%, #0f2810 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 pb-10 border-b border-white/10">
          <div>
            <h3 className="font-display text-2xl font-bold">
              Bang <span style={{ color: "var(--gold)" }}>Yadi</span>
            </h3>
            <p className="text-white/70 text-sm mt-2">Syar'i, Amanah & Profesional.</p>
          </div>
          <ul className="flex flex-wrap md:justify-end gap-6 text-sm text-white/80">
            <li><a href="https://wa.me/628557210835" className="hover:text-white">WhatsApp Kami</a></li>
            <li><a href="#kontak" className="hover:text-white">Lokasi Google Maps</a></li>
            <li><a href="#" className="hover:text-white">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
          </ul>
        </div>
        <p className="text-center text-xs text-white/50 mt-8">
          © 2026 Bang Yadi Qurban & Aqiqah. Syar'i, Amanah & Profesional.
        </p>
      </footer>
    </div>
  );
}
