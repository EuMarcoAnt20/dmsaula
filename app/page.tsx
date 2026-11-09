
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-slate-100 md:flex">

      {/* MENU LATERAL */}
      <aside className="w-full border-r border-white/10 bg-[#101a2d] p-6 md:w-64">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
            P
          </div>
          <div>
            <h1 className="font-bold">Sistema do Pedro</h1>
            <p className="text-xs text-slate-400">Painel administrativo</p>
          </div>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Menu principal
        </p>

        <nav className="space-y-2">
          <div className="rounded-xl bg-blue-600/15 px-4 py-3 font-medium text-blue-400">
            ▦ Dashboard
          </div>

          <Link
            href="/aluno/cadastro"
            className="block rounded-xl px-4 py-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            + Cadastro de alunos
          </Link>
        </nav>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-semibold">Sistema online</p>
          <p className="mt-2 text-xs text-emerald-400">
            ● Ambiente disponível
          </p>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <section className="flex-1 p-6 md:p-10">

        <header className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="mb-2 text-sm text-slate-400">
              Visão geral / Dashboard
            </p>
            <h2 className="text-3xl font-bold">
              Bem-vindo ao sistema!
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Gerencie seus alunos de maneira simples e organizada.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#121e33] px-5 py-3">
            <p className="text-sm font-semibold">Administrador</p>
            <p className="text-xs text-slate-400">Painel de controle</p>
          </div>
        </header>

        {/* CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#121e33] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xl text-blue-400">
              ♙
            </div>
            <p className="text-sm text-slate-400">Gestão de alunos</p>
            <h3 className="mt-2 text-xl font-bold">Cadastro</h3>
            <p className="mt-2 text-sm text-slate-500">
              Registre novos alunos no sistema.
            </p>
            <Link
              href="/aluno/cadastro"
              className="mt-5 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Acessar cadastro →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121e33] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/15 text-xl text-emerald-400">
              ✓
            </div>
            <p className="text-sm text-slate-400">Infraestrutura</p>
            <h3 className="mt-2 text-xl font-bold">Next.js</h3>
            <p className="mt-2 text-sm text-slate-500">
              Aplicação web em execução.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121e33] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/15 text-xl text-violet-400">
              ◈
            </div>
            <p className="text-sm text-slate-400">Banco de dados</p>
            <h3 className="mt-2 text-xl font-bold">PocketBase</h3>
            <p className="mt-2 text-sm text-slate-500">
              Integração prevista para armazenar alunos.
            </p>
          </div>

        </div>

        {/* APRESENTAÇÃO */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-950 to-[#121e33] p-8">
          <p className="text-sm font-semibold text-blue-400">
            SISTEMA DE GESTÃO
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Organização e praticidade em um só lugar.
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Utilize o painel administrativo para acessar o módulo
            de cadastro e gerenciar as informações dos alunos.
          </p>

          <Link
            href="/aluno/cadastro"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            Começar agora →
          </Link>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-600">
          Sistema do Pedro · Desenvolvido com Next.js
        </footer>

      </section>
    </main>
  );
}
