# 🌤️ Dashboard de Clima em Tempo Real

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](LINK_DO_TEU_PROJETO_NO_VERCEL)
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)

Este projeto é uma aplicação moderna de previsão do tempo desenvolvida com **Angular 18**. O dashboard oferece uma experiência de utilizador fluida, utilizando geolocalização automática e uma interface que reage visualmente às condições meteorológicas.

## 🚀 Funcionalidades de Destaque

- **📍 Geolocalização Inteligente:** Ao abrir a aplicação, o sistema deteta automaticamente a localização do utilizador (via Geolocation API) e exibe o clima local sem necessidade de interação manual.
- **🎭 UI Dinâmica:** O fundo da aplicação muda dinamicamente com base no estado do tempo (Sol, Chuva, Nuvens), utilizando transições suaves para uma experiência imersiva.
- **🔍 Busca Global:** Pesquisa instantânea de clima para qualquer cidade do mundo através da integração com a OpenWeather API.
- **📱 Design Responsivo:** Interface adaptável (Glassmorphism design) que funciona perfeitamente em dispositivos móveis e desktop.

## 🛠️ Tecnologias e Conceitos Utilizados

- **Angular 18:** Utilização de *Standalone Components* e novas funcionalidades da versão mais recente.
- **RxJS & HttpClient:** Gestão eficiente de chamadas assíncronas à API.
- **Change Detection Strategy:** Otimização da renderização da interface utilizando `ChangeDetectorRef` para garantir atualizações imediatas após a resposta do GPS.
- **Lifecycle Hooks:** Uso estratégico do `ngOnInit` para inicialização de serviços de sistema.
- **CSS Avançado:** Efeitos de vidro (Blur), camadas de overlay e backgrounds adaptativos.

## 📦 Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
ng serve
