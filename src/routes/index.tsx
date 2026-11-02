
import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Stethoscope,
  Utensils,
  Sun,
  Users,
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Navigation,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import atividadeJardim from "@/assets/atividade-jardim.jpg.asset.json";
import convivenciaDanca from "@/assets/convivencia-danca.jpg.asset.json";
import aniversario from "@/assets/aniversario-dez-anos.jpg.asset.json";
import enfeiteNatal from "@/assets/enfeite-natal.jpg.asset.json";

// Dados reais — atualizados em 01/11/2026
const WHATSAPP =
  "https://wa.me/5524992867683?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita.";

const TEL = "tel:+552424655623";

const INSTAGRAM = "https://www.instagram.com/repousofelizidade/";

const FACEBOOK =
  "https://www.facebook.com/people/Casa-de-Repouso-Feliz-Idade/100065107656316/";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Prefeito%20Berardineli%20194%20Independ%C3%AAncia%20Mendes%20Rio%20de%20Janeiro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Feliz Idade — Casa de Repouso em Mendes/RJ com cuidado 24h",
      },
      {
        name: "description",
        content:
          "Casa de repouso em Mendes/RJ com enfermagem 24h, fisioterapia, nutrição e atividades. Rua Prefeito Berardineli, 194 — Independência. Agende uma visita.",
      },
      {
        property: "og:title",
        content: "Feliz Idade — Casa de Repouso",
      },
      {
        property: "og:description",
        content:
          "Cuidado, conforto e carinho para quem você ama, em Mendes/RJ. Agende uma visita.",
      },
    ],
  }),
  component: Index,
});

const servicos = [
  {
    icon: Stethoscope,
    t: "Enfermagem 24h",
    d: "Equipe preparada dia e noite, com acompanhamento médico.",
  },
  {
    icon: Heart,
    t: "Fisioterapia",
    d: "Sessões para mobilidade, equilíbrio e qualidade de vida.",
  },
  {
    icon: Utensils,
    t: "Nutrição",
    d: "Cardápio caseiro e balanceado, feito por nutricionista.",
  },
  {
    icon: Sun,
    t: "Atividades",
    d: "Música, oficinas, festas e momentos de lazer no jardim.",
  },
  {
    icon: Users,
    t: "Convívio familiar",
    d: "Visitas livres e contato frequente com as famílias.",
  },
  {
    icon: ShieldCheck,
    t: "Segurança",
    d: "Ambiente adaptado, acessível e monitorado.",
  },
];

const galeria = [
  {
    src: aniversario.url,
    alt: "Residente e familiar comemorando com bolo e flores",
    caption: "Datas especiais",
  },
  {
    src: convivenciaDanca.url,
    alt: "Residente dançando com familiar em salão decorado",
    caption: "Música e dança",
  },
  {
    src: atividadeJardim.url,
    alt: "Residente em atividade recreativa no jardim com cuidadora",
    caption: "Lazer ao ar livre",
  },
  {
    src: enfeiteNatal.url,
    alt: "Enfeite decorado com a foto de uma residente",
    caption: "Cada história em destaque",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div className="leading-tight text-primary-foreground">
            <span className="block font-serif text-xl font-semibold">
              Feliz Idade
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] opacity-80">
              Casa de Repouso
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={TEL}
              aria-label="Ligar"
              className="rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/30"
            >
              <Phone className="h-5 w-5" />
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/30"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/30"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[88vh] items-end">
        <img
          src={hero}
          alt="Residente sorrindo com cuidadora no jardim"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-foreground/65 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Casa de repouso em Mendes/RJ
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
            Um lar cheio de carinho para quem você ama
          </h1>

          <p className="mt-4 max-w-xl text-lg text-primary-foreground/85">
            Cuidado 24 horas, conforto e alegria em um ambiente acolhedor como
            a sua casa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-primary-foreground shadow-lg transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar visita
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              <Instagram className="h-5 w-5" />
              Ver no Instagram
            </a>

            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              <Facebook className="h-5 w-5" />
              Ver no Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <span
            className="mb-4 block h-1 w-14 rounded-full bg-accent"
            aria-hidden="true"
          />

          <h2 className="text-3xl font-semibold md:text-4xl">
            Cuidado completo, com amor
          </h2>

          <p className="mt-3 text-muted-foreground">
            Tudo o que seu familiar precisa para viver bem, em um só lugar.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border"
            >
              <div className="mb-4 inline-flex rounded-xl bg-secondary p-3 text-primary">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <img
            src={atividadeJardim.url}
            alt="Residente em atividade recreativa no jardim com cuidadora"
            loading="lazy"
            width={827}
            height={860}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <span
              className="mb-4 block h-1 w-14 rounded-full bg-accent"
              aria-hidden="true"
            />

            <h2 className="text-3xl font-semibold md:text-4xl">
              Um ambiente que acolhe
            </h2>

            <p className="mt-4 text-secondary-foreground/80">
              Espaços claros e confortáveis, jardim amplo e áreas de convivência
              pensadas para garantir segurança e bem-estar em cada momento do
              dia.
            </p>

            <ul className="mt-6 space-y-2 text-secondary-foreground">
              <li>• Jardim e áreas de convivência</li>
              <li>• Festas, oficinas e atividades diárias</li>
              <li>• Visitas livres para a família</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <span
            className="mb-4 block h-1 w-14 rounded-full bg-accent"
            aria-hidden="true"
          />

          <h2 className="text-3xl font-semibold md:text-4xl">
            Nosso dia a dia
          </h2>

          <p className="mt-3 text-muted-foreground">
            Momentos reais de quem vive aqui.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((f) => (
            <figure
              key={f.src}
              className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border"
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                width={828}
                height={820}
                className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
              />

              <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">
                {f.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="font-serif text-2xl italic leading-relaxed md:text-3xl">
            "Minha mãe voltou a sorrir. Aqui ela é tratada como família, e nós
            ficamos tranquilos."
          </p>

          <p className="mt-4 text-muted-foreground">
            — Mariana, filha de residente
          </p>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Venha nos conhecer
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            Agende uma visita sem compromisso e conheça nosso espaço de perto.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold shadow-lg hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              (24) 99286-7683
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-instagram px-6 py-3 font-semibold shadow-lg hover:brightness-110"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>

            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-3 font-semibold transition hover:bg-primary-foreground/10"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-sm text-primary-foreground/85 sm:grid-cols-3">
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 transition hover:text-primary-foreground"
            >
              <MapPin className="h-4 w-4" />
              Rua Prefeito Berardineli, 194
              <br className="hidden sm:block" />
              Independência, Mendes/RJ
            </a>

            <a
              href={TEL}
              className="flex items-center justify-center gap-2 transition hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              (24) 2465-5623
            </a>

            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 transition hover:text-primary-foreground"
            >
              <Navigation className="h-4 w-4" />
              Ver rota no mapa
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p className="font-serif text-base text-foreground">
          Feliz Idade — Casa de Repouso
        </p>

        <p className="mt-1">
          Rua Prefeito Berardineli, 194 — Independência, Mendes/RJ · (24)
          2465-5623
        </p>

        <p className="mt-1 flex items-center justify-center gap-1">
          <Clock className="h-3 w-3" />
          Atendimento todos os dias
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Casa de Repouso Feliz Idade"
            className="transition hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
          </a>

          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook da Casa de Repouso Feliz Idade"
            className="transition hover:text-foreground"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-20 rounded-full bg-whatsapp p-4 text-primary-foreground shadow-xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
