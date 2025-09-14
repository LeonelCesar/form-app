import React from "react";

 function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <a href="/" className="text-xl font-semibold">
            FreelaFlow Footer
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Ferramentas para freelancers gerirem projetos e finanças — simples e elegante.
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          <div>
            <h4 className="font-medium">Produto</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="/features">Funcionalidades</a></li>
              <li><a href="/pricing">Preços</a></li>
              <li><a href="/integrations">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium">Empresa</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="/about">Sobre</a></li>
              <li><a href="/careers">Carreiras</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-medium">Newsletter</h4>
          <p className="text-sm text-gray-600 mt-2">Recebe atualizações e dicas mensais.</p>
          <form className="mt-3 flex gap-2">
            <input aria-label="Email" type="email" placeholder="teu@email.com"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">Subscrever</button>
          </form>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <span>© {new Date().getFullYear()} FreelaFlow. Todos os direitos reservados.</span>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="/privacy" className="hover:underline">Privacidade</a>
            <a href="/terms" className="hover:underline">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 

