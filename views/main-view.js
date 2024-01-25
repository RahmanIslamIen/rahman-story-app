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
          <h1>Your Hero Card Title</h1>
          <p>This is some cool content inside the hero card.</p>
          <button>Click Me</button>
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
