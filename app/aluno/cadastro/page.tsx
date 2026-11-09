
"use client";

import { useState, type FormEvent } from "react";
import { pb } from "@/lib/pocketbase";

export default function CadastroAluno() {
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const dados = new FormData(form);

    setLoading(true);
    setMensagem("");

    try {
      await pb.collection("tb_aluno").create({
        nome: dados.get("nome"),
        idade: Number(dados.get("idade")),
        email: dados.get("email"),
        telefone: dados.get("telefone"),
      });

      setTipoMensagem("sucesso");
      setMensagem("Aluno cadastrado com sucesso!");
      form.reset();
    } catch (error) {
      console.error(error);
      setTipoMensagem("erro");
      setMensagem(
        "Não foi possível cadastrar. Verifique a conexão com o PocketBase."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b1120] text-slate-100 md:flex">
      {/* Menu lateral */}
      <aside className="w-full border-b border-white/10 bg-[#101a2d] p-6 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
            P
          </div>
          <div>
            <h1 className="font-bold tracking-wide">Sistema do Pedro</h1>
            <p className="text-xs text-slate-400">Painel administrativo</p>
          </div>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Menu principal
        </p>

        <nav className="space-y-2">
          <div className="flex items-center gap-3 rounded-xl bg-blue-600/15 px-4 py-3 font-medium text-blue-400">
            <span>▦</span>
            Cadastro de alunos
          </div>
        </nav>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-medium">Sistema online</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Ambiente administrativo
          </div>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <section className="flex-1 p-5 md:p-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="mb-1 text-sm text-slate-400">
              Painel / Alunos
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Cadastro de alunos
            </h2>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold">
              P
            </div>
            <div>
              <p className="text-sm font-semibold">Administrador</p>
              <p className="text-xs text-slate-400">Sistema</p>
            </div>
          </div>
        </header>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#121e33] p-5">
            <p className="text-sm text-slate-400">Módulo atual</p>
            <h3 className="mt-2 text-xl font-semibold">Gestão de alunos</h3>
            <p className="mt-1 text-sm text-slate-500">
              Cadastro e registro de estudantes
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121e33] p-5">
            <p className="text-sm text-slate-400">Banco de dados</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              <h3 className="text-xl font-semibold">PocketBase</h3>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Armazenamento de informações
            </p>
          </div>
        </div>

        <div className="max-w-3xl rounded-2xl border border-white/10 bg-[#121e33] p-6 shadow-2xl shadow-black/20 md:p-8">
          <div className="mb-7">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-2xl text-blue-400">
              +
            </div>
            <h3 className="text-xl font-bold">Novo aluno</h3>
            <p className="mt-1 text-sm text-slate-400">
              Preencha os campos abaixo para registrar um novo aluno.
            </p>
          </div>

          <form onSubmit={salvar} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Nome completo
              </label>
              <input
                required
                type="text"
                name="nome"
                placeholder="Digite o nome do aluno"
                className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Idade
                </label>
                <input
                  required
                  min="1"
                  type="number"
                  name="idade"
                  placeholder="Ex.: 21"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Telefone
                </label>
                <input
                  required
                  type="tel"
                  name="telefone"
                  placeholder="(65) 99999-9999"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                E-mail
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="aluno@email.com"
                className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {mensagem && (
              <div
                role="status"
                className={`rounded-xl border p-4 text-sm ${
                  tipoMensagem === "sucesso"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-red-500/30 bg-red-500/10 text-red-400"
                }`}
              >
                {mensagem}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-xs text-slate-500">
                Os dados serão enviados ao PocketBase.
              </p>

              <button
                disabled={loading}
                type="submit"
                className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Cadastrando..." : "Cadastrar aluno →"}
              </button>
            </div>
          </form>
        </div>

        <footer className="mt-10 text-center text-xs text-slate-600">
          Sistema do Pedro · Desenvolvido com Next.js
        </footer>
      </section>
    </main>
  );
}
