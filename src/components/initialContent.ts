export const initialContent = `<h1 class="text-4xl font-bold text-center text-gray-900">As Vantagens do TailwindCSS</h1>
<p class="mt-6 text-lg text-gray-700">
    O TailwindCSS é um framework de CSS utilitário que vem ganhando popularidade entre os desenvolvedores web. Diferente dos frameworks tradicionais, como Bootstrap e Foundation, o TailwindCSS não fornece componentes prontos. Em vez disso, ele oferece uma ampla gama de classes utilitárias de baixo nível que você pode combinar para criar interfaces personalizadas diretamente no seu HTML.
</p>

<blockquote class="mt-8 p-4 italic border-l-4 bg-gray-100 text-gray-600 border-blue-500">
    "TailwindCSS te dá o poder de criar qualquer coisa que você imaginar, sem sair do seu HTML."
</blockquote>

<h2 class="mt-8 text-2xl font-semibold text-gray-800">Vantagens do TailwindCSS</h2>

<h3 class="mt-4 text-xl font-semibold text-gray-800">1. Personalização Fácil</h3>
<p class="mt-2 text-gray-700">
    O TailwindCSS permite uma personalização fácil e eficiente. Com sua configuração através do arquivo <code>tailwind.config.js</code>, você pode ajustar o design ao seu gosto.
</p>
<pre class="bg-gray-200 p-4 rounded mt-4">
<code class="language-js">
module.exports = {
theme: {
extend: {
colors: {
primary: '#1a202c',
secondary: '#2d3748',
},
},
},
}
</code>
</pre>

<h3 class="mt-8 text-xl font-semibold text-gray-800">2. Redução de Código CSS</h3>
<p class="mt-2 text-gray-700">
    Com TailwindCSS, você pode escrever menos CSS, já que muitas das estilizações comuns são feitas diretamente através das classes utilitárias. Por exemplo:
</p>

<h3 class="mt-8 text-xl font-semibold text-gray-800">3. Design Responsivo</h3>
<p class="mt-2 text-gray-700">
    O TailwindCSS facilita a criação de designs responsivos usando suas classes utilitárias. Por exemplo, você pode ajustar o layout de um componente em diferentes tamanhos de tela sem adicionar uma linha de CSS:
</p>
<h3 class="mt-8 text-xl font-semibold text-gray-800">4. Alta Performance</h3>
<p class="mt-2 text-gray-700">
    Utilizando o JIT (Just-in-Time) mode do TailwindCSS, você pode melhorar a performance da sua aplicação, já que apenas as classes realmente usadas são geradas no CSS final.
</p>
<pre class="bg-gray-200 p-4 rounded mt-4">
<code class="language-js">
module.exports = {
mode: 'jit',
purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
// ...restante da configuração
}
</code>
</pre>

<h3 class="mt-8 text-xl font-semibold text-gray-800">5. Comunidade e Eco-sistema</h3>
<p class="mt-2 text-gray-700">
    A comunidade do TailwindCSS é vibrante e em crescimento, com muitos plugins, temas e recursos disponíveis para acelerar o desenvolvimento.
</p>

<p class="mt-8 text-lg text-gray-700">
    Em resumo, o TailwindCSS oferece uma abordagem moderna e eficiente para estilizar suas aplicações web, focando na produtividade e flexibilidade. Se você ainda não experimentou, vale a pena dar uma chance e ver como ele pode transformar seu fluxo de trabalho.
</p>`;
