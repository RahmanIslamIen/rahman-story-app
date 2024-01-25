import { LitElement, html, customElement, property, css } from "lit-element";

@customElement("navbar-keren")
class bagianNavbar extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      />
      <nav class="navbar navbar-expand-lg" style="background-color: #20c997;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><b>📰 Rahman Story APP</b></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ml-2">
                <a class="nav-link" aria-current="page" href="#">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tambah-story.html">Tambah Story</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

@customElement("hero-section")
class heroSection extends LitElement {
  render() {
    return html`
      <style>
        .hero-card {
          width: 99%;
          margin: 7px;
          background-color: #4caf50; /* Warna hijau */
          position: relative;
          border-radius: 10px;
        }

        /* Tambahan untuk membuat teks dan tombol terlihat di dalam card */
        .content {
          padding: 20px;
          color: white;
          text-align: center;
        }

        button {
          padding: 10px 20px;
          background-color: white;
          color: #4caf50;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
        }
      </style>

      <div class="hero-card">
        <div class="glow"></div>
        <div class="content">
          <h1>Cerita Unik Bagi Semua Orang</h1>
          <p>mari buat cerita dari keseharian mu yang berwarna !</p>
          <button>selamat datang</button>
        </div>
      </div>
    `;
  }
}

@customElement("bagian-footer")
class footer extends LitElement {
  render() {
    return html`
      <style>
        .footer {
          margin-left: -5px;
          background-color: #333;
          color: white;
          padding: 20px;
          text-align: center;
          position: fixed;
          bottom: 0;
          width: 100%;
        }

        .footer a {
          color: #4caf50;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      </style>
      <div class="footer">
        <p>&copy; 2024 Rahman Story App</p>
        <p>
          Designed by
          <a href="https://github.com/RahmanIslamIen" target="_blank"
            >Rahman Islam</a
          >
        </p>
      </div>
    `;
  }
}

@customElement("animasi-mouse")
class AnimasiMouse extends LitElement {
  static styles = css`
    .cursor {
      position: fixed;
      width: 15px;
      height: 15px;
      background-color: #4caf50;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0.6;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 0.6;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  handleMouseMove(e) {
    const cursor = this.shadowRoot.querySelector(".cursor");
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  }

  render() {
    return html`<div class="cursor"></div>`;
  }
}
