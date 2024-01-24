import { LitElement, html, customElement, property, css } from "lit-element";

@customElement("main-view")
class RandomView extends LitElement {
  render() {
    return html`
      <style>
        .hero-card {
          width: 99%;
          margin: 5px;
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
