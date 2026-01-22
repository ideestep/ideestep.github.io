<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Basu Neuro Lab</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #222; }

    header {
      border-bottom: 2px solid #000;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-weight: bold;
      font-size: 1.1rem;
    }

    nav a {
      margin-left: 20px;
      text-decoration: none;
      color: #000;
      font-weight: 500;
    }

    nav a:hover { text-decoration: underline; }

    .hero {
      padding: 60px 24px;
      border-bottom: 2px solid #000;
      background: #f5f5f5;
    }

    .hero h1 { font-size: 2rem; margin-bottom: 12px; }
    .hero p { max-width: 900px; }

    .content {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 32px;
      padding: 32px 24px;
    }

    aside {
      border-right: 2px solid #000;
      padding-right: 16px;
    }

    aside h3 { margin-bottom: 12px; }
    aside ul { list-style: none; }
    aside li { margin-bottom: 8px; font-size: 0.95rem; }

    main section { margin-bottom: 32px; }
    main h2 { margin-bottom: 8px; }

    footer {
      border-top: 2px solid #000;
      padding: 16px;
      text-align: center;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .content { grid-template-columns: 1fr; }
      aside { border-right: none; border-bottom: 2px solid #000; padding-bottom: 16px; }
    }
  </style>
</head>
<body>

<header>
  <div class="logo">Basu Neuro Lab</div>
  <nav>
    <a href="index.html">Home</a>
    <a href="research.html">Research</a>
    <a href="people.html">People</a>
    <a href="publications.html">Publications</a>
    <a href="news.html">News</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>

<section class="hero">
  <h1>Neural Mechanisms of Navigation and Decision-Making</h1>
  <p>
    The Basu Neuro Lab investigates how the brain constructs internal maps of the world and
    uses them to guide flexible behavior and decisions. We take an interdisciplinary approach
    combining systems neuroscience, behavior, and computational analysis.
  </p>
</section>

<section class="content">
  <aside>
    <h3>Latest Updates</h3>
    <ul>
      <li>New preprint on spatial memory (2026)</li>
      <li>PhD position open – Fall intake</li>
      <li>Conference talk at SfN</li>
    </ul>
  </aside>

  <main>
    <section>
      <h2>Research Focus</h2>
      <p>
        Our work aims to understand how neural circuits encode spatial environments and
        how these representations support planning, inference, and decision-making.
      </p>
    </section>

    <section>
      <h2>Methods</h2>
      <p>
        We use behavioral tasks, in-vivo recordings, imaging, and computational modeling
        to study navigation-related cognition in controlled and naturalistic settings.
      </p>
    </section>

    <section>
      <h2>Join the Lab</h2>
      <p>
        We are always interested in motivated students and collaborators with backgrounds
        in neuroscience, engineering, physics, or computer science.
      </p>
    </section>
  </main>
</section>

<footer>
  © 2026 Basu Neuro Lab · Academic Research Website
</footer>

</body>
</html>
