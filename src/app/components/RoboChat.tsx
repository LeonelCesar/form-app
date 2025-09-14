import React, { useEffect, useRef, useState } from "react";

type Role = "user" | "bot";

type Message = {
  id: string;
  role: Role;
  text: string;
  createdAt: number;
};

function uid(prefix = "m") {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

function botReplyFor(text: string): string {
  const t = text.toLowerCase().trim();

  if (!t) return "Podes escrever algo para eu responder 🙂";
  if (t.includes("olá") || t.includes("ola") || t.includes("oi") || t.includes("hello"))
    return "Olá! Em que posso ajudar-te hoje?";
  if (t.includes("ajuda") || t.includes("como") || t.includes("o que"))
    return "Posso ajudar com explicações, ideias de código, ou exercícios — diz-me especificamente o que queres.";
  if (t.endsWith("?")) return "Boa pergunta! Aqui vai uma resposta curta: ainda estou a aprender, mas vou tentar ajudar.";
  if (t.includes("react")) return "React é uma biblioteca para construir interfaces. Se quiseres, posso dar um exemplo.";
  
  return `Tu disseste: "${text}" — interessante! Ainda estou a aprender a dar respostas melhores.`;
}

export default function RoboChat() {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem("chatrobo_messages_v1");
      if (!raw) return [
        { id: uid("bot"), role: "bot", text: "Olá! Sou o ChatRobo 🤖. Faz-me uma pergunta.", createdAt: Date.now() }
      ];
      return JSON.parse(raw) as Message[];
    } catch (e) {
      return [
        { id: uid("bot"), role: "bot", text: "Olá! Sou o ChatRobo 🤖. Faz-me uma pergunta.", createdAt: Date.now() }
      ];
    }
  });
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem("chatrobo_messages_v1", JSON.stringify(messages));
    
    const el = listRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [messages]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: uid("u"), role: "user", text: trimmed, createdAt: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");

   
    setIsBotTyping(true);
    const thinkMs = 600 + Math.min(1500, trimmed.length * 30);

    setTimeout(() => {
      const replyText = botReplyFor(trimmed);
      const botMsg: Message = { id: uid("b"), role: "bot", text: replyText, createdAt: Date.now() };
      setMessages((m) => [...m, botMsg]);
      setIsBotTyping(false);
    
      inputRef.current?.focus();
    }, thinkMs);
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
  }

  function clearChat() {
    const initial: Message[] = [{ id: uid("bot"), role: "bot", text: "Conversa limpa. Olá! Sou o ChatRobo 🤖.", createdAt: Date.now() }];
    setMessages(initial);
    localStorage.removeItem("chatrobo_messages_v1");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">🤖</div>
            <div>
              <h1 className="text-lg font-semibold">ChatRobo</h1>
              <p className="text-sm text-slate-500">Pergunta-me qualquer coisa — React + TypeScript + Tailwind</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="text-sm px-3 py-1 rounded-md bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 focus:outline-none"
            >
              Limpar
            </button>
          </div>
        </div>

        <div className="h-[60vh] md:h-[70vh] flex flex-col">
          <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3 bg-gradient-to-b from-white to-slate-50">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${m.role === "user" ? "bg-indigo-600 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-xl" : "bg-slate-100 text-slate-800 rounded-tr-2xl rounded-br-2xl rounded-bl-xl"} max-w-[78%] px-4 py-2` }>
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</div>
                  <div className={`text-[10px] mt-1 ${m.role === "user" ? "text-indigo-100/90 text-right" : "text-slate-400 text-left"}`}>
                    {new Date(m.createdAt).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {isBotTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-tr-2xl rounded-br-2xl rounded-bl-xl px-4 py-2 max-w-[50%]">
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-slate-100 p-3 flex items-center gap-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escreve a tua pergunta — pressiona Enter para enviar"
              className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              aria-label="Mensagem"
              autoFocus
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none"
              aria-label="Enviar"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      <span className="w-2 h-2 rounded-full animate-[typing_1.2s_infinite] inline-block" style={{ backgroundColor: "#94a3b8" }} />
      <span className="w-2 h-2 rounded-full animate-[typing_1.2s_0.2s_infinite] inline-block" style={{ backgroundColor: "#94a3b8" }} />
      <span className="w-2 h-2 rounded-full animate-[typing_1.2s_0.4s_infinite] inline-block" style={{ backgroundColor: "#94a3b8" }} />

      <style>{`
        @keyframes typing {
          0% { transform: translateY(0); opacity: 0.4 }
          50% { transform: translateY(-3px); opacity: 1 }
          100% { transform: translateY(0); opacity: 0.4 }
        }
      `}</style>
    </div>
  );
}
