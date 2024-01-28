import { LitElement, html, customElement, property, css } from "lit-element";

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

@customElement("floating-badge")
class floatingBadge extends LitElement {
  render() {
    return html`
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .floating-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #3498db;
          color: #fff;
          border: none;
          padding: 10px 45px;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease;
        }

        .floating-btn:hover {
          background-color: #2980b9;
        }
      </style>

      <button class="floating-btn">
        <marquee>selamat menambahkan cerita</marquee>
      </button>
    `;
  }
}

@customElement("hubungi-saya")
class hubungiSaya extends LitElement {
  render() {
    return html`
      <style>
        .container {
          display: flex;
          justify-content: space-between;
          background-color: #198754;
          padding: 60px;
          box-sizing: border-box;
        }

        .container > div {
          width: 48%; /* Adjust as needed */
        }

        .container > div:last-child {
          text-align: right;
        }

        h4 {
          color: white;
        }

        p {
          color: white;
        }

        .outline-btn {
          display: inline-block;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          border: 2px solid #007bff;
          color: #007bff;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        .outline-btn:hover {
          background-color: #007bff;
          color: #fff;
        }
      </style>

      <div class="container">
        <div>
          <h4>Tentang Website</h4>
          <p>
            web yang dibuat untuk mempublikasi kan ceritamu dengan tampilan yang
            memukau. seteiap story yang kamu tulis akan menjadi konten unik yang
            akan dilihat baik diri kamu sendri ataupun orang lain.
          </p>
        </div>
        <div>
          <button type="button" class="outline-btn">Hubungi Saya</button>
        </div>
      </div>
    `;
  }
}
