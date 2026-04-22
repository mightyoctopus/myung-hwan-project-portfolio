// Dev Log:
// https://docs.google.com/document/d/1UcV3j0SPz234LIHQ1FlLSbyZExBTNKeA4g1aR2hYJWM/edit?tab=t.0

(() => {
  'use strict';

  const CONFIG = Object.freeze({
    assetsDir: 'assets',
    imageExtensions: ['webp', 'png', 'jpg', 'jpeg'],
    revealThreshold: 0.12,
    projectLimit: 6,
    themeStorageKey: 'tm_theme',
  });

  const PROJECTS_RAW = [
      {
      cat: 'agentic_llm',
      icon: 'lucide:shield-check',
      type: 'Multi-Agent System',
      title: 'WorthBrain - Multi Agent System',
      impact: "Outcome: End-to-end agentic system for real-time price discovery of discounted deals online and push notification.",
      desc: 'Multi-agent architecture that collects deals from external sources, estimates fair value using ensemble models (Frontier + Fine-Tuned Open Source + Custom Neural Network Model), and surfaces high-confidence opportunities. Designed for modular experimentation and evaluation.',
      priority: 16,
      problem:
        'How can multiple LLMs and fine-tuned open-source models be orchestrated into a reproducible decision system that identifies genuinely underpriced products from the online?',
      approach: [
        'Train baseline models, then calibrate probabilities for reliable risk scores.',
        'Define threshold policies that balance cost, recall, and reviewer workload.',
        'Expose decision KPIs, segment cuts, and explanations to guide triage and audits.',
      ],
      signals: [
        'PR-AUC / ROC-AUC + calibration metrics',
        'KPI monitoring for review volume, approvals/declines, and drift cues',
        'SHAP-driven explanations for reviewer trust and faster triage',
      ],
      stack: [
        'Python',
        'HF-Transformers',
        'SciKit-Learn',
        "SFT-Trainer",
        'QLoRA',
        'RAG Pipeline',
        'OpenAI API',
        "Meta Llama 3.1",
        "Gradio"
      ],
      tags: ['Multi-Agent Systems', 'LoRA/QLoRA',"LLM Evaluation", 'Decision Intelligence', "Dataset Curation"],
      repo: 'worthbrain',
      hfSpace: "https://huggingface.co/spaces/MightyOctopus/worth-brain",
      demo: "https://drive.google.com/file/d/1HCyEESXbye_O19zVpYNPEQuyCv4hVQXy/view?usp=sharing",
      imageBase: 'WorthBrain Main Page',
    },

          {
      cat: 'agentic_llm',
      icon: 'lucide:shield-check',
      type: 'LLM-Automation-System',
      title: 'LLM-Powered Job Search Automation',
      impact: "Outcome: Fully automated system that discovers, filters, evaluates, and exports relevant AI job opportunities from the web into structured outputs (Google Sheets).",
      desc: 'A pipeline-based LLM-powered system that automates job discovery by integrating multi-source search, rule-based filtering, adaptive scraping, and LLM-driven evaluation. Designed to reduce manual effort in identifying high-quality AI/LLM roles, with a focus on remote opportunities and relevance to specific technical domains.',
      priority: 15,
      problem:
        'How can job discovery be automated in a way that reliably identifies relevant AI roles from noisy web data, while balancing accuracy, cost, and the need for human review?',
      approach: [
        "Generate targeted search queries using an LLM (Google operators + semantic queries).",
        "Aggregate results from multiple so  uplicates, irrelevant domains, and low-value roles before expensive processing.",
        "Use adaptive scraping with fallback browser automation (Playwright) to handle dynamic or incomplete pages.",
        "Evaluate job relevance using LLM-based reasoning with structured outputs and manual-review fallback.",
      ],
      signals: [
        "Number of relevant jobs surfaced vs total collected (precision)",
        "Manual review rate for ambiguous or low-confidence cases",
        "Scraping success rate and recovery rate via browser automation",
        "End-to-end pipeline efficiency (jobs processed vs kept)",
      ],
      stack: [
          'Python',
          'AsyncIO',
          'OpenAI API',
          'SerpAPI',
          'Exa API',
          'Playwright',
          'BeautifulSoup',
          'Requests',
          'gspread (Google Sheets)',
      ],
      tags: [
          'LLM Systems',
          'Automation Pipelines',
          'Web Scraping',
          'LLM Evaluation',
          'Async Processing',
      ],
      repo: 'automated-job-discovery-agentic-system',
      demo: "https://drive.google.com/file/d/1Vl3OONpfAYiVYzdSJE9nN-MDNDZKNqyQ/view?usp=drive_link",
      imageBase: 'automated_job_search_llm',
    },

    {
      cat: 'models',
      icon: 'lucide:building-2',
      type: 'Fine-Tuned LLM',
      title: 'Consumer Products Pricer Model — Fine-Tuned LLaMA 3.1 8B',
      impact: "Outcome: Fine-tuned domain-specific(E-Commerce) LLM model that estimates product prices with high accuracy.",
      desc: 'Fine-tuned LLaMA 3.1 8B using QLoRA with 4-bit quantization to efficiently adapt a general model to numeric price regression tasks and price prediction capability.',
      priority: 14,
      problem:
        'How can a general-purpose LLM be efficiently adapted to predict structured numeric outputs (e.g., product prices) from noisy marketplace descriptions using parameter-efficient fine-tuning?',
      approach: [
        'Leak-safe splits and evaluation aligned with time-dependent clinical workflows.',
        'Calibrated risk scores and threshold candidates for different review capacities.',
        'A dashboard-style review view to support triage and auditability.',
      ],
      signals: [
        'AUC/PR-AUC + calibration curves',
        'Threshold trade-offs: recall vs false alarms vs review workload',
        'Error slices by cohort/segment (when applicable)',
      ],
      stack: ["Python", "LLaMA 3.1", "Transformers", "SFT-Trainer", "QLoRA", "PEFT", "BitsAndBytes", "Hugging Face Dataset"],
      tags: ['Model Fine-Tuning ', 'LLM Regression', 'E-Commerce AI', "Marketplace Analytics"],
      hfSpace: "https://huggingface.co/MightyOctopus/pricer-lora-ft-v3",
      demo: "https://docs.google.com/document/d/1PwuOCS6wgO3MqKexnEdAqpVswXMqGilqKEuFyhUGk7M/edit?tab=t.0#heading=h.jb89avh7g4kj",
      imageBase: 'pricer-lora-ft-v3',
    },

    {
      cat: 'datasets',
      icon: 'lucide:activity',
      type: 'Dataset',
      title: 'Amazon-Pricer-Dataset-v2-0',
      impact: "Outcome: 169K-row supervised e-commerce dataset for LLM price training.",
      desc: 'Processed and structured Amazon product metadata into prompt-style inputs paired with ground-truth prices, designed for LLM linear regression training. Improved consistency and formatting over my initial version of amazon-pricer-dataset-v1.',
      priority: 13,
      problem:
        'How can raw e-commerce data be cleaned and reshaped into a stable training dataset for text-to-number regression?',
      approach: [
        'Define a strict, schema-friendly log format for requests, retrieval, responses, and tool calls.',
        'Model evaluation as a regression problem: compare runs, detect regressions, and gate rollout.',
        'Track cost/latency budgets and failure modes (timeouts, retries, fallbacks) to inform routing decisions.',
      ],
      signals: [
        'Quality metrics + human review flags (where available)',
        'Latency, error rates, and failure categories',
        'Cost per request / per conversation, budget burn',
        'Drift / distribution shifts on inputs and retrieval behavior',
      ],
      stack: ['Python', 'Hugging Face Dataset', 'Pandas', 'Parquet', 'Data Cleaning', 'Plotly'],
      tags: ['Dataset Engineering', 'Feature Engineering', 'ML Infrastructure'],
      hfSpace: "https://huggingface.co/datasets/MightyOctopus/amazon-pricer-dataset-v2-0 ",
      imageBase: 'Amazon-Pricer-Dataset-v2-0',
    },

    {
      cat: 'agentic_llm',
      icon: 'lucide:file-text',
      type: 'RAG System',
      title: 'SEO Expert ChatBot (RAG)',
      impact: "Outcome: RAG pipeline for an expert level of SEO-focused knowledge grounding.",
      desc: 'Implemented a RAG pipeline including document ingestion via Google API, structured chunking, embedding generation, and vector-based retrieval, followed by controlled context injection into the LLM. The knowledge base consisted of practitioner-grade SEO resources used in real-world agency settings rather than generic public content, in order to achieve an expert level of SEO insights in LLM responses.',
      priority: 12,
      problem:
        'How can domain-specific and insightful answers at a real world level be generated without relying purely on the base LLM’s internal knowledge which sounds too generic?',
      approach: [
        'Provide realistic QA logs + corpus with retrieval traces to benchmark retrieval/reranking.',
        'Score answer quality and groundedness with citations + targeted error slices.',
        'Track latency/cost signals to iterate under budget constraints.',
      ],
      signals: [
        'Retrieval metrics (recall@k, MRR / nDCG when applicable)',
        'Answer quality + groundedness / citation coverage',
        'Operational telemetry: latency, token/cost budgets',
      ],
      stack: ['Python', 'LangChain', 'RAG',"Google Docs API",  'Gradio', 'Jupyter Lab'],
      tags: ['RAG',"Data Chunking", 'Data Retrieval', 'Domain AI'],
      repo: 'seo-specialist-chatbot-rag-langchain',
      hfSpace: "https://huggingface.co/spaces/MightyOctopus/seo-expert-chatbot",
      demo: "https://drive.google.com/file/d/1Q850jOtNC7sA9GbBXdDGhKtIgm8S0e9f/view?usp=sharing",
      imageBase: 'SEO Expert ChatBot (RAG)',
    },

    {
      cat: 'agentic_llm',
      icon: 'lucide:stethoscope',
      type: 'Multimodal System',
      title: 'Airline Customer Service Assistant ',
      impact: "Outcome: Multimodal airline customer service chatbot that provides ticket pricing, booking guidance, and destination info through unified text, voice, image, and multilingual interaction.",
      desc: 'Orchestrates speech-to-text transcription, LLM reasoning, translation, image generation, and text-to-speech synthesis within a single conversational workflow.',
      priority: 11,
      problem:
        'How can multiple input/output modalities be wired into a single conversational AI system?',
      approach: [
        'Validate inputs with a strict schema (types, ranges, missingness guards).',
        'Train a baseline + tuned model with leak-safe splits and calibrated probabilities.',
        'Package artifacts for repeatable inference and regression checks.',
      ],
      signals: [
        'ROC-AUC / PR-AUC + calibration (Brier / reliability)',
        'Threshold trade-offs for sensitivity vs false positives',
        'Data quality checks: missingness, outliers, schema drift',
      ],
      stack: ['Python', 'GPT-5-mini', 'DALL·E 3', 'gpt-4o-mini-transcribe', 'Claude 3.5 Haiku', 'Gradio'],
      tags: ['Multimodal AI', 'Speech Interfaces', 'Image Generation', "Frontier Model Integration"],
      repo: 'airline-assistant-multimodal-chatbot',
      hfSpace: "https://multimodal-airline-assistant-chatbot-tz4bz6sg6q-uc.a.run.app/",
      demo: "https://drive.google.com/file/d/1qrb1FjtkxlTXUutg3jFG2vDpQpxyBXA_/view?usp=sharing",
      imageBase: 'Multimodal Airline Chatbot',
    },

    {
      cat: 'agentic_llm',
      icon: 'lucide:car',
      type: 'NLP Classifier',
      title: 'AI Written Text Detector',
      impact: "Outcome: AI-generated text detection with structured evaluation.",
      desc: 'Combines a RoBERTa-based classifier with an LLM to detect AI-generated text and provide explanation-driven analysis based on the detection result. The system integrates classification, reasoning, and structured output to make detection results more interpretable.',
      problem: "How can AI-generated text be detected using a trained classifier instead of heuristic checks?",
      stack: ["Python", "HF Transformers", "RoBERTa", "LangChain", "LangGraph", "Gradio"],
      priority: 10,
      tags: ['NLP', 'Classification', 'AI Detection'],
      repo: 'ai-written-text-detector',
      hfSpace: "https://huggingface.co/spaces/MightyOctopus/ai-written-text-detector",
      demo: "https://drive.google.com/file/d/1aPMDEQEAK2Q_dWiI0agxqyo4KTF5259R/view?usp=sharing",
      imageBase: 'Ai Written Text Detector LLM Image',
    },

    {
      cat: 'models',
      icon: 'lucide:plug',
      type: 'LLM Model Optimization',
      title: 'Pricer-Merged-Model-A-v1',
      impact: "Outcome: Merged QLoRA adapter weights into the base LLaMA model to produce a consolidated checkpoint that supports simplified inference and enables further fine-tuning from an improved baseline.",
      desc: 'Merged adapter weights using PEFT utilities, removing the need for runtime adapter loading and creating a new fully-integrated model suitable for iterative fine-tuning and downstream deployment.',
      problem: "Can a LoRA adapter be merged with a base LLM so that further training builds on the improved weights instead of starting from scratch?",
      stack: ["Python", "Hugging Face Transformers", "SFT-Trainer", "PEFT", "QLoRA", "LLaMA 3.1"],
      priority: 9,
      tags: ['LoRA Merging', 'Inference Optimization', "Model Checkpoints", 'Iterative Fine-Tuning'],
      hfSpace: "https://huggingface.co/MightyOctopus/pricer-merged-model-A-v1",
      demo: "https://docs.google.com/document/d/1PwuOCS6wgO3MqKexnEdAqpVswXMqGilqKEuFyhUGk7M/edit?tab=t.0#heading=h.ftj1ap51kmq",
      imageBase: 'Llama 3.1 8b Merged Model',
    },

    {
      cat: 'datasets',
      icon: 'lucide:plug',
      type: 'dataset',
      title: 'Amazon-Pricer-Dataset-v1',
      impact: "Supervised product-to-price dataset prepared for numeric regression and LLM fine-tuning.",
      desc: 'Early version of a structured product-to-price dataset derived from raw Amazon product dataset, created to support initial supervised fine-tuning experiments.',
      problem: "How can unstructured and messy product listings be converted into model-ready training pairs?",
      stack: ["Python", "Hugging Face Datasets", "Hugging Face Hub", "NumPy", "Matplotlib"],
      priority: 8,
      tags: ['Feature Engineering', 'Data Structuring', "Data Evaluation"],
      hfSpace: "https://huggingface.co/datasets/MightyOctopus/amazon-pricer-dataset",
      imageBase: 'Amazon Dataset V1',
    },

    {
      cat: 'agentic_llm',
      icon: 'lucide:plug',
      type: 'Transcription AI',
      title: 'Minutes of Meeting Generator',
      impact: "Instantly generated well-structured summary of meeting minutes, converted  from a raw discussion audio file.(mp3 extension)",
      desc: 'Whisper-1 model transcribes an audio file into text and quantized Llama 3.1 model generates a well structured summary of business meeting minutes.',
      problem: "How can long, unstructured meeting audio files be converted into structured summaries instantly and conveniently?",
      stack: ["Python", "OpenAI Whisper-1", "LLaMA 3.1 8B", "HF Transformers", "Gradio"],
      priority: 8,
      tags: ['Summarization', 'Productivity Tools', "Audio Transcription LLM"],
      repo: 'business-meeting-minutes-generator',
      hfSpace: "https://huggingface.co/spaces/MightyOctopus/minutes-of-meeting-generator",
      demo: "https://drive.google.com/file/d/1KKL-vJAxOIi174DYlj6o8WYSRdRyF8pk/view?usp=sharing",
      imageBase: 'Minutes of meeting generator screenshot',
    },


    {
      cat: 'agentic_llm',
      icon: 'lucide:plug',
      type: 'Multi-Agent System',
      title: 'AutoGen Blog Agents (Nested Chat)',
      impact: "Fully autonomous end-to-end blog generation workflow across multiple domains of expertise.",
      desc: 'Built a hierarchical multi-agent system using AutoGen where a Writer Agent generates content and a Critic Agent coordinates domain-specific reviewers (SEO, Legal, Ethics, Meta). Structured feedback aggregation and controlled refinement loops enable systematic content improvement.',
      problem: "How can complex content generation tasks be decomposed into structured, role-based AI agents that collaborate through controlled conversational workflows to run autonomously and improve quality, compliance, and optimization?",
      stack: ["Python", "AutoGen", "OpenAI API"],
      priority: 7,
      tags: ['Multi-Agent Systems', 'Hierarchical Agent Architecture', "Agent Orchestration"],
      repo: 'autogen_blog_agents_nested_chat',
      demo: "https://drive.google.com/file/d/16-WKT2TWD6rQqH1JLRsG-f6e1HnszAI5/view?usp=sharing",
      imageBase: 'multi agent blog writing system',
    },

    {
      cat: 'agentic_llm',
      icon: 'lucide:plug',
      type: 'LLM Application',
      title: 'Business Brochure Generator AI',
      impact: "Accurately generates structured, hallucination-free company brochures using LLM and web scraping",
      desc: 'AI-powered business brochure generator that creates structured company profiles from any given URL using GPT-5. The system integrates web scraping via BeautifulSoup (BS4) to extract factual content directly from the company’s website, grounding the LLM’s output in real source data and reducing hallucination.',
      problem: "How can company websites be programmatically transformed into structured documentation?",
      stack: ["Python", "BeautifulSoup", "OpenAI API", "Streamlit"],
      priority: 6,
      tags: ['Web Scraping', 'LLM Content Automation', "Business Brochure"],
      repo: 'business_brochure_generator_ai',
      hfSpace: "https://business-brochure-maker-ai-731852872245.us-central1.run.app/",
      demo: "https://drive.google.com/file/d/1TgnIvIHPrCZP3cJlDdsLETF2e9CV4Za0/view?usp=sharing",
      imageBase: 'business_brochure_maker_ai_main_page',
    },

    {
      cat: 'agentic_llm',
      icon: 'lucide:plug',
      type: 'AI Developer Tool',
      title: 'Python Code Optimizer - Python to C++ Converter',
      impact: "Generates C++ implementations from Python scripts, with measurable improvements in execution time compared to the original code.",
      desc: 'Built an AI-assisted system that translates Python scripts into C++ using multiple LLM providers, streaming generated code in real time through Gradio UI interface. The application compiles and runs both the original Python and converted C++ code to verify correctness and compare execution time within a single workflow.',
      problem: "How can Python code be optimized in C++ for execution speed and low latency?",
      stack: ["Python", "OpenAI API", "Google Gemini API", "C++ Compilation", "Gradio"],
      priority: 5,
      tags: ['Code Optimizer', 'AI-Assisted Development', "Dev Tools", "Performance Comparison"],
      repo: 'llm-powered-python-to-cpp-code-converter',
      hfSpace: "https://huggingface.co/spaces/MightyOctopus/python-to-cpp-code-optimizer",
      demo: "https://drive.google.com/file/d/1TmJvlqpq0uH14oL2JINwTh9trgiiyOJo/view?usp=sharing",
      imageBase: 'Python to C++ Code Converter Portfolio Main',
    },

    {
      cat: 'python_apps',
      icon: 'lucide:plug',
      type: 'Automation System',
      title: 'Cheapest Flight Deals Alert System',
      impact: "Outcome: Stay alerted for the cheapest flight ticket price whenever it comes below user-defined price cap.",
      desc: 'Flight price monitoring system that checks flight prices via Amadeus API, compares against Google Sheet price caps, and sends whatsapp notifications for the cheapest ticket and flight information.',
      problem: "How can flight price tracking be automated across multiple destinations with threshold-based alerts?",
      stack: ["Python", "REST APIs", "Amadeus API", "Twilio API", "Sheety API"],
      priority: 4,
      tags: ['API Integration', 'Automation', "Messaging Notification"],
      repo: 'cheapest-flight-deals-alert-app',
      demo: "https://drive.google.com/file/d/1FGTgT_cmmeI_87btlvs5cFOIccOOqBBv/view?usp=drive_link",
      imageBase: 'Flight Ticket Deal Notification System',
    },

    {
      cat: 'python_apps',
      icon: 'lucide:plug',
      type: 'Web Automation',
      title: 'Booking.com Automation Bot',
      impact: "Outcome: Automated hotel search and data export using browser automation.",
      desc: 'Uses Selenium WebDriver to automate interaction with dynamically rendered Booking.com pages and extract structured hotel data. The system applies automated filtering based on user-defined preferences such as destination, star rating, and price range, and exports the tailored results to a CSV file.',
      problem: "How can structured data be extracted from booking.com automatically that requires manual browser interaction?",
      stack: ["Python", "Selenium", "Pandas", "CSV Export"],
      priority: 3,
      tags: ['Browser Automation', 'Data Extraction'],
      repo: 'booking.com-automation-bot',
      imageBase: 'Booking.com Hotel Booking Automation',
    },

    {
      cat: 'python_apps',
      icon: 'lucide:plug',
      type: 'Web Automation',
      title: 'Spotify Automation with Billboard Songs',
      impact: "Outcome: Generates Spotify playlists automatically from historical Billboard data.",
      desc: 'Scrapes Billboard chart data using BeautifulSoup (BS4) and creates corresponding playlists programmatically via the Spotify API. The application runs in a CLI environment where users input a target date, after which the entire process is fully automated. (Data extraction, track matching, and playlist creation)',
      problem: "How can historical Billboard ranking data be integrated for playlist generation with a simple date input?",
      stack: ["Python", "Spotify API", "Beautiful Soup "],
      priority: 3,
      tags: ['Web Scraping', 'API Integration', "Automation"],
      repo: 'spotify-automation-with-billboard-songs',
      imageBase: 'Spotify Playlist Automation Portfolio Main',
    },
  ];

  class Dom {
    static id(id) {
      return document.getElementById(id);
    }

    static qs(sel, root = document) {
      return root.querySelector(sel);
    }

    static qsa(sel, root = document) {
      return Array.from(root.querySelectorAll(sel));
    }

    static clear(el) {
      if (!el) return;
      el.textContent = '';
    }
  }

  class Storage {
    static get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    }

    static set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        return;
      }
    }
  }

  class Clipboard {
    static async writeText(text) {
      const value = String(text || '');
      if (!value) return false;

      const canUse =
        typeof navigator !== 'undefined' &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === 'function' &&
        window.isSecureContext;

      if (canUse) {
        try {
          await navigator.clipboard.writeText(value);
          return true;
        } catch {
          return this.fallback(value);
        }
      }
      return this.fallback(value);
    }

    static fallback(value) {
      try {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return Boolean(ok);
      } catch {
        return false;
      }
    }
  }

  class Toast {
    constructor(el) {
      this.el = el;
      this.timer = null;
    }

    show(message, ms = 1200) {
      if (!this.el) return;
      const text = String(message || '').trim();
      if (!text) return;

      this.el.textContent = text;
      this.el.classList.add('show');
      if (this.timer) window.clearTimeout(this.timer);

      this.timer = window.setTimeout(
        () => {
          this.el.classList.remove('show');
        },
        Number(ms) || 1200,
      );
    }
  }

  class EmailCopy {
    constructor({ selector, toast }) {
      this.selector = selector;
      this.toast = toast;
    }

    buildEmail(el) {
      const user = (el.getAttribute('data-email-user') || '').trim();
      const domain = (el.getAttribute('data-email-domain') || '').trim();
      if (!user || !domain) return '';
      return `${user}@${domain}`;
    }

    bind(el) {
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = this.buildEmail(el);
        if (!email) return;
        const ok = await Clipboard.writeText(email);
        if (ok) this.toast?.show('Copied');
      });
    }

    init() {
      const nodes = Dom.qsa(this.selector);
      for (const el of nodes) this.bind(el);
    }
  }

  class IconRenderer {
    static isIconifyId(value) {
      if (!value) return false;
      const s = String(value).trim();
      return /^[a-z0-9]+:[a-z0-9-]+$/i.test(s);
    }

    static svgBase(px) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', String(px));
      svg.setAttribute('height', String(px));
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      svg.style.display = 'block';
      svg.style.flex = '0 0 auto';
      return svg;
    }

    static strokeAttrs(el) {
      el.setAttribute('fill', 'none');
      el.setAttribute('stroke', 'currentColor');
      el.setAttribute('stroke-width', '2');
      el.setAttribute('stroke-linecap', 'round');
      el.setAttribute('stroke-linejoin', 'round');
    }

    static inlineSvg(id, px) {
      const key = String(id || '').trim();
      if (!key) return null;

      if (key === 'lucide:menu') {
        const svg = this.svgBase(px);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        this.strokeAttrs(path);
        svg.appendChild(path);
        return svg;
      }

      if (key === 'lucide:chevron-up') {
        const svg = this.svgBase(px);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'm18 15-6-6-6 6');
        this.strokeAttrs(path);
        svg.appendChild(path);
        return svg;
      }

      if (key === 'lucide:moon') {
        const svg = this.svgBase(px);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 3a7.5 7.5 0 0 0 9 9A9 9 0 1 1 12 3Z');
        this.strokeAttrs(path);
        svg.appendChild(path);
        return svg;
      }

      if (key === 'lucide:sun') {
        const svg = this.svgBase(px);

        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', '12');
        c.setAttribute('cy', '12');
        c.setAttribute('r', '4');
        this.strokeAttrs(c);
        svg.appendChild(c);

        const rays = [
          [12, 2, 12, 5],
          [12, 19, 12, 22],
          [2, 12, 5, 12],
          [19, 12, 22, 12],
          [4.5, 4.5, 6.7, 6.7],
          [17.3, 17.3, 19.5, 19.5],
          [17.3, 6.7, 19.5, 4.5],
          [4.5, 19.5, 6.7, 17.3],
        ];

        for (const r of rays) {
          const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          l.setAttribute('x1', String(r[0]));
          l.setAttribute('y1', String(r[1]));
          l.setAttribute('x2', String(r[2]));
          l.setAttribute('y2', String(r[3]));
          this.strokeAttrs(l);
          svg.appendChild(l);
        }

        return svg;
      }

      return null;
    }

    static node(icon, { size } = {}) {
      const px = Number.isFinite(size) ? size : 18;
      if (this.isIconifyId(icon)) {
        const id = String(icon).trim();
        const svg = this.inlineSvg(id, px);
        if (svg) return svg;
        const span = document.createElement('span');
        span.className = 'iconify';
        span.setAttribute('data-icon', id);
        span.style.fontSize = `${px}px`;
        return span;
      }
      const t = document.createElement('span');
      t.textContent = icon || '•';
      t.style.fontSize = `${px}px`;
      return t;
    }

    static mount(el, icon, opts) {
      if (!el) return;
      Dom.clear(el);
      el.appendChild(this.node(icon, opts));
    }
  }

  class ThemeManager {
    constructor({ storageKey }) {
      this.storageKey = storageKey;
      this.root = document.documentElement;
      this.toggleBtn = Dom.id('themeToggle');
      this.themeMeta = document.querySelector('meta[name="theme-color"]');
      this.mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
    }

    isStoredTheme(v) {
      return v === 'light' || v === 'dark';
    }

    getStoredTheme() {
      const v = Storage.get(this.storageKey);
      return this.isStoredTheme(v) ? v : null;
    }

    getInitialTheme() {
      const stored = this.getStoredTheme();
      if (stored) return stored;
      const prefersLight = this.mq ? this.mq.matches : false;
      return prefersLight ? 'light' : 'dark';
    }

    themeColor(theme) {
      return theme === 'light' ? '#f7f9ff' : '#070a12';
    }

    syncThemeColor(theme) {
      if (!this.themeMeta) return;
      this.themeMeta.setAttribute('content', this.themeColor(theme));
    }

    apply(theme) {
      if (theme === 'light') this.root.setAttribute('data-theme', 'light');
      else this.root.removeAttribute('data-theme');
      this.syncThemeColor(theme);
    }

    get current() {
      return this.root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    syncToggleLabel() {
      if (!this.toggleBtn) return;
      const isLight = this.current === 'light';
      Dom.clear(this.toggleBtn);
      this.toggleBtn.appendChild(
        IconRenderer.node(isLight ? 'lucide:sun' : 'lucide:moon', { size: 18 }),
      );
      this.toggleBtn.setAttribute(
        'aria-label',
        isLight ? 'Switch to dark theme' : 'Switch to light theme',
      );
      this.toggleBtn.setAttribute('title', isLight ? 'Light theme' : 'Dark theme');
    }

    bind() {
      if (!this.toggleBtn) return;
      this.syncToggleLabel();
      this.toggleBtn.addEventListener('click', () => {
        const next = this.current === 'light' ? 'dark' : 'light';
        this.apply(next);
        Storage.set(this.storageKey, next);
        this.syncToggleLabel();
      });
    }

    bindSystem() {
      if (!this.mq) return;
      const handler = (e) => {
        if (this.getStoredTheme()) return;
        const next = e && e.matches ? 'light' : 'dark';
        this.apply(next);
        this.syncToggleLabel();
      };
      if (this.mq.addEventListener) this.mq.addEventListener('change', handler);
      else if (this.mq.addListener) this.mq.addListener(handler);
    }

    init() {
      this.apply(this.getInitialTheme());
      this.bind();
      this.bindSystem();
    }
  }

  class Debounce {
    static wrap(fn, ms) {
      let t;
      return function debounced(...args) {
        clearTimeout(t);
        t = window.setTimeout(() => fn.apply(this, args), ms);
      };
    }
  }

  class Github {
    static url(repo) {
      return `https://github.com/mightyoctopus/${repo}`;
    }
  }

  const UrlState = Object.freeze({
    base: '#projects',
    setProject(repo) {
      const r = String(repo || '').trim();
      if (!r) return;
      const next = `${this.base}?project=${encodeURIComponent(r)}`;
      if (history && history.replaceState) history.replaceState(null, '', next);
    },
    clearProject() {
      if (history && history.replaceState) history.replaceState(null, '', this.base);
    },
    getProject() {
      const h = String(window.location.hash || '');
      if (!h.startsWith(this.base)) return null;
      const parts = h.split('?');
      if (parts.length < 2) return null;
      const params = new URLSearchParams(parts.slice(1).join('?'));
      const p = params.get('project');
      return p ? String(p) : null;
    },
  });

  class ImageResolver {
    static mountFallback(container, project) {
      if (!container) return;
      container.classList.add('is-icon');
      Dom.clear(container);
      const wrap = document.createElement('div');
      wrap.className = 'p-fallback';
      IconRenderer.mount(wrap, (project && project.icon) || '•', { size: 32 });
      container.appendChild(wrap);
    }

    static normalizeBaseName(s) {
      if (!s) return '';
      return String(s).trim().replace(/\s+/g, ' ').replace(/[—–]/g, '-');
    }

    static slugify(s) {
      if (!s) return '';
      return this.normalizeBaseName(s)
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    }

    static candidates(base) {
      const raw = String(base || '').trim();
      if (!raw) return [];

      const slug = this.slugify(raw);
      const bases = Array.from(new Set([slug, raw].filter(Boolean)));

      const out = [];
      for (const b of bases) {
        const encoded = encodeURIComponent(b);
        for (const ext of CONFIG.imageExtensions) {
          out.push(`${CONFIG.assetsDir}/${encoded}.${ext}`);
        }
      }
      return out;
    }

    static mount(container, project, { mode } = { mode: 'card' }) {
      if (!container) return;
      container.classList.remove('is-icon');
      Dom.clear(container);

      const candidates = [
        ...this.candidates(project.imageBase),
        ...this.candidates(project.repo),
        ...this.candidates(String(project.repo || '').toLowerCase()),
      ];

      if (!candidates.length) {
        this.mountFallback(container, project);
        return;
      }

      const img = document.createElement('img');
      img.className = 'p-img';
      img.loading = mode === 'modal' ? 'eager' : 'lazy';
      img.decoding = 'async';
      img.alt = project.title || 'Project';
      img.referrerPolicy = 'no-referrer';

      let i = 0;
      const tryNext = () => {
        if (i >= candidates.length) {
          this.mountFallback(container, project);
          return;
        }
        img.src = candidates[i++];
      };

      img.addEventListener('error', tryNext);
      img.addEventListener(
        'load',
        () => {
          img.removeEventListener('error', tryNext);
        },
        { once: true },
      );

      container.appendChild(img);
      tryNext();
    }
  }

  class Reveal {
    constructor({ threshold }) {
      this.threshold = threshold;
      this.observer = this.create();
    }

    create() {
      if (!('IntersectionObserver' in window)) return null;
      return new IntersectionObserver(
        (entries, obs) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        },
        { threshold: this.threshold },
      );
    }

    observeAll(selector) {
      if (!this.observer) return;
      for (const el of Dom.qsa(selector)) this.observer.observe(el);
    }

    prime(selector) {
      const h = window.innerHeight || 800;
      for (const el of Dom.qsa(selector)) {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92) el.classList.add('in');
      }
    }
  }

  class NavHighlighter {
    constructor({ sections, links }) {
      this.sections = sections;
      this.links = links;
    }

    update() {
      const y = window.scrollY;
      let current = 'home';

      for (const s of this.sections) {
        const id = s.id || 'home';
        const top = s.getBoundingClientRect().top + window.scrollY;
        if (y >= top - 220) current = id;
      }

      for (const a of this.links) {
        const href = a.getAttribute('href') || '';
        const active = href.slice(1) === current;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      }
    }
  }

  class Typewriter {
    constructor({ el, lines }) {
      this.el = el;
      this.lines = lines;
      this.lineIdx = 0;
      this.charIdx = 0;
      this.deleting = false;
      this.TYPE_MS = 78;
      this.DEL_MS = 46;
      this.HOLD_MS = 2300;
    }

    reducedMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    start() {
      if (!this.el) return;
      if (this.reducedMotion()) {
        this.el.textContent = this.lines[0] || '';
        return;
      }
      this.tick();
    }

    tick() {
      const full = this.lines[this.lineIdx] || '';

      if (!this.deleting) {
        this.charIdx += 1;
        this.el.textContent = full.slice(0, this.charIdx);

        if (this.charIdx >= full.length) {
          this.deleting = true;
          window.setTimeout(() => this.tick(), this.HOLD_MS);
          return;
        }

        window.setTimeout(() => this.tick(), this.TYPE_MS);
        return;
      }

      this.charIdx -= 1;
      this.el.textContent = full.slice(0, Math.max(0, this.charIdx));

      if (this.charIdx <= 0) {
        this.deleting = false;
        this.lineIdx = (this.lineIdx + 1) % this.lines.length;
        window.setTimeout(() => this.tick(), 780);
        return;
      }

      window.setTimeout(() => this.tick(), this.DEL_MS);
    }
  }

  class ParticlesBackground {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = null;
      this.w = 0;
      this.h = 0;
      this.dpr = 1;
      this.raf = null;
      this.running = true;

      this.CFG = Object.freeze({
        count: 55,
        maxSpeed: 0.22,
        linkDist: 140,
        radiusMin: 0.8,
        radiusMax: 1.9,
      });

      this.particles = [];
      this.onResize = () => {
        this.resize();
        this.seed();
      };
      this.onVisibility = () => {
        this.running = !document.hidden;
        if (this.running && !this.raf) this.step();
        if (!this.running && this.raf) {
          cancelAnimationFrame(this.raf);
          this.raf = null;
        }
      };
    }

    reducedMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    init() {
      if (!this.canvas) return;
      if (this.reducedMotion()) return;

      this.ctx = this.canvas.getContext('2d', { alpha: true });
      if (!this.ctx) return;

      this.resize();
      this.seed();
      this.step();

      window.addEventListener('resize', this.onResize, { passive: true });
      document.addEventListener('visibilitychange', this.onVisibility);
    }

    rand(a, b) {
      return a + Math.random() * (b - a);
    }

    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = window.innerWidth;
      this.h = window.innerHeight;

      this.canvas.width = Math.floor(this.w * this.dpr);
      this.canvas.height = Math.floor(this.h * this.dpr);
      this.canvas.style.width = `${this.w}px`;
      this.canvas.style.height = `${this.h}px`;

      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }

    seed() {
      this.particles.length = 0;
      for (let i = 0; i < this.CFG.count; i += 1) {
        this.particles.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          vx: this.rand(-this.CFG.maxSpeed, this.CFG.maxSpeed),
          vy: this.rand(-this.CFG.maxSpeed, this.CFG.maxSpeed),
          r: this.rand(this.CFG.radiusMin, this.CFG.radiusMax),
        });
      }
    }

    buildGrid(cellSize) {
      const grid = new Map();
      const key = (cx, cy) => (cx << 16) ^ cy;

      for (let i = 0; i < this.particles.length; i += 1) {
        const p = this.particles[i];
        const cx = Math.floor(p.x / cellSize);
        const cy = Math.floor(p.y / cellSize);
        const k = key(cx, cy);
        if (!grid.has(k)) grid.set(k, []);
        grid.get(k).push(i);
      }

      return { grid, key };
    }

    integrate() {
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        }
        if (p.x > this.w) {
          p.x = this.w;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        }
        if (p.y > this.h) {
          p.y = this.h;
          p.vy *= -1;
        }
      }
    }

    drawLinks() {
      const cell = this.CFG.linkDist;
      const { grid, key } = this.buildGrid(cell);

      this.ctx.lineWidth = 1;

      for (let i = 0; i < this.particles.length; i += 1) {
        const a = this.particles[i];
        const acx = Math.floor(a.x / cell);
        const acy = Math.floor(a.y / cell);

        for (let dx = -1; dx <= 1; dx += 1) {
          for (let dy = -1; dy <= 1; dy += 1) {
            const list = grid.get(key(acx + dx, acy + dy));
            if (!list) continue;

            for (const j of list) {
              if (j <= i) continue;
              const b = this.particles[j];
              const vx = a.x - b.x;
              const vy = a.y - b.y;
              const dist = Math.hypot(vx, vy);
              if (dist > this.CFG.linkDist) continue;

              const alpha = 1 - dist / this.CFG.linkDist;
              this.ctx.strokeStyle = `rgba(79,140,255,${0.18 * alpha})`;
              this.ctx.beginPath();
              this.ctx.moveTo(a.x, a.y);
              this.ctx.lineTo(b.x, b.y);
              this.ctx.stroke();
            }
          }
        }
      }
    }

    drawDots() {
      this.ctx.fillStyle = 'rgba(79,140,255,.55)';
      for (const p of this.particles) {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    step() {
      if (!this.running) return;
      this.ctx.clearRect(0, 0, this.w, this.h);
      this.integrate();
      this.drawLinks();
      this.drawDots();
      this.raf = requestAnimationFrame(() => this.step());
    }
  }

  class Project {
    constructor({
      cat,
      icon,
      type,
      title,
      desc,
      repo,
      hfSpace,
      demo,
      imageBase,
      priority,
      problem,
      approach,
      signals,
      stack,
      alt,
      tags,
      impact,
    }) {
      this.cat = cat;
      this.icon = icon;
      this.type = type;
      this.title = title;
      this.desc = desc;
      this.repo = repo;
      this.hfSpace = hfSpace;
      this.demo = demo;
      this.imageBase = imageBase;

      const pr = Number(priority);
      this.priority = Number.isFinite(pr) ? pr : 0;

      this.problem = problem;
      this.approach = approach;
      this.signals = signals;
      this.stack = Array.isArray(stack) ? stack : null;
      this.alt = alt;

      this.tags = Array.isArray(tags) ? tags : Project.buildTags({ cat, type, title, desc });
      this.stack = Array.isArray(this.stack)
        ? this.stack
        : Project.buildStack({ cat, type, title, desc, repo, tags: this.tags });

      this.impact =
        typeof impact === 'string' ? impact : "";
    }

    static categoryLabel(cat) {
      const map = {
        agentic_llm: 'agentic_llm',
        models: 'models',
        datasets: 'datasets',
        llm_system: 'LLM Systems',
        python_apps: 'python_apps & Tools',
      };
      return map[cat] || 'Project';
    }

    static buildTags({ cat, type, title, desc }) {
      const text = `${title || ''} ${desc || ''} ${type || ''}`.toLowerCase();

      const out = [];
      const push = (t) => {
        if (!t) return;
        const v = String(t).trim();
        if (!v) return;
        if (out.includes(v)) return;
        out.push(v);
      };

      const rules = [
        ['rag', 'RAG'],
        ['retrieval', 'Retrieval'],
        ['hallucination', 'Hallucination'],
        ['llm', 'LLMOps'],
        ['genai', 'GenAI'],
        ['telemetry', 'Telemetry'],
        ['observability', 'Observability'],
        ['routing', 'Routing'],
        ['cost', 'Cost Governance'],
        ['dashboard', 'Dashboard'],
        ['streamlit', 'Streamlit'],
        ['gradio', 'Gradio'],
        ['time series', 'Time Series'],
        ['early warning', 'Early Warning'],
        ['risk', 'Risk Modeling'],
        ['fraud', 'Fraud'],
        ['calibration', 'Calibration'],
        ['threshold', 'Thresholding'],
        ['sentiment', 'Sentiment'],
        ['spam', 'Spam Detection'],
        ['transformer', 'Transformers'],
        ['feature engineering', 'Feature Engineering'],
        ['geo', 'Geo Analytics'],
        ['ev', 'EV Analytics'],
        ['football', 'Sports Analytics'],
        ['visual', 'Visualization'],
        ['matplotlib', 'Matplotlib'],
        ['seaborn', 'Seaborn'],
      ];

      for (const [needle, tag] of rules) {
        if (out.length >= 3) break;
        if (text.includes(needle)) push(tag);
      }

      if (out.length < 2) push(Project.categoryLabel(cat));
      if (out.length < 3 && type) push(type);

      return out.slice(0, 3);
    }

//    static buildImpact({ cat, type, title, desc }) {
//      const t = (type || '').toLowerCase();
//      const text = `${title || ''} ${desc || ''}`.toLowerCase();
//
//      if (text.includes('dashboard')) {
//        return 'Outcome: decision-ready dashboard for monitoring and triage.';
//      }
//      if (t.includes('dataset') || text.includes('dataset')) {
//        return 'Outcome: 169K-row supervised e-commerce dataset for LLM price training.';
//      }
//      if (text.includes('rag') || text.includes('llm') || cat === 'genai') {
//        return 'Outcome: production-oriented GenAI workflow with reliability guardrails.';
//      }
//      if (text.includes('risk') || cat === 'finance') {
//        return 'Outcome: End-to-end agentic system for real-time price discovery and valuation.';
//      }
//      return 'Outcome: Fine-tuned domain-specific LLM model for structured product price estimation as a specialized E-Commerce valuation model.';
//    }

    static buildStack({ cat, type, title, desc, repo, tags }) {
      const text = [title, desc, type, repo]
        .concat(Array.isArray(tags) ? tags : [])
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const out = [];
      const push = (t) => {
        if (!t) return;
        const v = String(t).trim();
        if (!v) return;
        if (out.includes(v)) return;
        out.push(v);
      };

      push('Python');

      const t = (type || '').toLowerCase();
      if (t.includes('dataset') || text.includes('dataset')) {
        push('Pandas');
        push('Jupyter');
        push('NumPy');
      }

      if (text.includes('pandas')) push('Pandas');
      if (text.includes('numpy')) push('NumPy');
      if (text.includes('polars')) push('Polars');
      if (text.includes('duckdb')) push('DuckDB');

      if (text.includes('streamlit')) push('Streamlit');
      if (text.includes('plotly')) push('Plotly');
      if (text.includes('gradio')) push('Gradio');

      if (text.includes('fastapi')) {
        push('FastAPI');
        push('Pydantic');
      }
      if (text.includes('docker')) push('Docker');

      if (text.includes('postgres') || text.includes('pgvector')) push('PostgreSQL / pgvector');
      if (text.includes('sqlite')) push('SQLite');
      if (text.includes('mysql')) push('MySQL');
      if (text.includes('mongodb')) push('MongoDB');
      if (text.includes('redis')) push('Redis');

      if (text.includes('faiss')) push('FAISS');
      if (text.includes('chroma')) push('Chroma');
      if (text.includes('pinecone')) push('Pinecone');
      if (text.includes('weaviate')) push('Weaviate');

      if (
        text.includes('rag') ||
        text.includes('retrieval') ||
        text.includes('llm') ||
        cat === 'genai'
      ) {
        push('Transformers');
        if (text.includes('langchain')) push('LangChain');
        if (text.includes('llamaindex')) push('LlamaIndex');
        if (text.includes('ragas')) push('RAGAS');
        if (text.includes('deepeval')) push('DeepEval');
      }

      if (text.includes('scikit') || text.includes('sklearn') || text.includes('ml '))
        push('scikit-learn');
      if (text.includes('pytorch')) push('PyTorch');
      if (text.includes('tensorflow')) push('TensorFlow');
      if (text.includes('xgboost') || text.includes('xgb')) push('XGBoost');
      if (text.includes('lightgbm') || text.includes('lgbm')) push('LightGBM');

      if (text.includes('telemetry') || text.includes('observability') || text.includes('monitor'))
        push('OpenTelemetry');

      if (out.length < 4) {
        push('Pandas');
        push('scikit-learn');
      }

      return out.slice(0, 7);
    }
    get githubUrl() {
    if (!this.repo) return null;
      return Github.url(this.repo);
    }

    get detailsUrl() {
      if (this.repo) return Github.url(this.repo);
      if (this.hfSpace) return this.hfSpace;
      if (this.demo) return this.demo;
      return null;
    }

    matchesQuery(q) {
      const query = (q || '').trim().toLowerCase();
      if (!query) return true;
      const hay = [this.title, this.desc, this.type, this.cat]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return hay.includes(query);
    }
  }

  class ProjectCollection {
    constructor(projects) {
      this.projects = (Array.isArray(projects) ? projects.slice() : []).sort((a, b) => {
        const pa = Number(a && a.priority) || 0;
        const pb = Number(b && b.priority) || 0;
        if (pb !== pa) return pb - pa;
        const ta = String((a && a.title) || '');
        const tb = String((b && b.title) || '');
        return ta.localeCompare(tb);
      });
    }

    findByRepo(repo) {
      if (!repo) return null;
      const key = String(repo).trim();
      if (!key) return null;
      return this.projects.find((p) => p && p.repo === key) || null;
    }

    byCategory(cat) {
      if (cat === 'all') return this.projects.slice();
      return this.projects.filter((p) => p.cat === cat);
    }

    filter({ cat, query }) {
      return this.byCategory(cat).filter((p) => p.matchesQuery(query));
    }

    visible({ items, query, showAll, limit }) {
      if (query && query.trim()) return items;
      return showAll ? items : items.slice(0, limit);
    }
  }

  class ProjectModal {
    constructor(root) {
      this.root = root;
      this.closeBtn = Dom.id('mClose');
      this.typeEl = Dom.id('mType');
      this.titleEl = Dom.id('mTitle');
      this.mediaEl = Dom.id('mMedia');
      this.summaryEl = Dom.id('mProblem');
      this.approachEl = Dom.id('mApproach');
      this.signalsEl = Dom.id('mSignals');
      this.stackEl = Dom.id('mStack');
      this.repoEl = Dom.id('mRepo');
      this.altEl = Dom.id('mAlt');

      this.lastFocus = null;
      this.active = null;
    }

    isOpen() {
      return !!this.root && this.root.classList.contains('show');
    }

    open(project) {
      if (!this.root) return;
      this.active = project;
      this.lastFocus = document.activeElement;

      if (project && project.repo) UrlState.setProject(project.repo);

      this.root.classList.add('show');
      this.root.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      if (this.typeEl) this.typeEl.textContent = project.type || 'Project';
      if (this.titleEl) this.titleEl.textContent = project.title || '—';

      if (this.mediaEl) {
        Dom.clear(this.mediaEl);
        ImageResolver.mount(this.mediaEl, project, { mode: 'modal' });
      }

      if (this.summaryEl) this.summaryEl.textContent = project.problem || project.desc || '—';

      this.setList(this.approachEl, Array.isArray(project.approach) ? project.approach : null);
      this.setList(this.signalsEl, Array.isArray(project.signals) ? project.signals : null);
      this.setTags(this.stackEl, Array.isArray(project.stack) ? project.stack : null);

      if (this.repoEl) {
        this.repoEl.href = project.detailsUrl;
        this.repoEl.style.display = 'inline-flex';
      }

      if (this.altEl) {
        if (project.alt && project.alt.href) {
          this.altEl.href = project.alt.href;
          this.altEl.textContent = project.alt.label || 'Secondary link';
          this.altEl.style.display = 'inline-flex';
        } else {
          this.altEl.style.display = 'none';
        }
      }

      if (this.closeBtn) this.closeBtn.focus();
    }

    close() {
      if (!this.root) return;
      this.root.classList.remove('show');
      this.root.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      UrlState.clearProject();

      const toFocus = this.lastFocus;
      this.lastFocus = null;
      this.active = null;

      if (toFocus && toFocus.focus) toFocus.focus();
    }

    setList(ul, items) {
      if (!ul) return;
      const block = ul.closest('.modal-block');

      if (!items || !items.length) {
        Dom.clear(ul);
        if (block) block.style.display = 'none';
        return;
      }

      if (block) block.style.display = '';
      Dom.clear(ul);
      for (const x of items) {
        const li = document.createElement('li');
        li.textContent = x;
        ul.appendChild(li);
      }
    }

    setTags(container, items) {
      if (!container) return;
      const block = container.closest('.modal-block');

      if (!items || !items.length) {
        Dom.clear(container);
        if (block) block.style.display = 'none';
        return;
      }

      if (block) block.style.display = '';
      Dom.clear(container);
      for (const x of items) {
        const s = document.createElement('span');
        s.className = 'tag';
        s.textContent = x;
        container.appendChild(s);
      }
    }

    bind() {
      if (!this.root) return;

      const closers = Dom.qsa('[data-close="1"]', this.root);
      for (const el of closers) el.addEventListener('click', () => this.close());

      if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());

      document.addEventListener('keydown', (e) => {
        if (!this.isOpen()) return;
        if (e.key === 'Escape') this.close();
      });
    }
  }

  class PortfolioApp {
    constructor() {
      this.grid = Dom.id('projectsGrid');
      this.projectsMeta = Dom.id('projectsMeta');
      this.projectsToggle = Dom.id('projectsToggle');

      this.searchInput = Dom.id('projectSearch');
      this.clearSearch = Dom.id('clearSearch');

      this.scrollProgress = Dom.id('scrollProgress');
      this.topBtn = Dom.id('topBtn');
      this.navBar = Dom.id('navBar');
      this.navLinks = Dom.qsa('nav a');
      this.sections = Dom.qsa('main.hero, section');

      this.brandBtn = Dom.id('brandHome');

      this.techToggle = Dom.id('techToggle');
      this.fullTech = Dom.id('fullTech');

      this.currentCat = 'all';
      this.showAll = false;
      this.searchQuery = '';

      this.theme = new ThemeManager({ storageKey: CONFIG.themeStorageKey });
      this.reveal = new Reveal({ threshold: CONFIG.revealThreshold });
      this.nav = new NavHighlighter({ sections: this.sections, links: this.navLinks });

      this.toast = new Toast(Dom.id('toast'));
      this.emailCopy = new EmailCopy({ selector: '[data-copy-email="1"]', toast: this.toast });

      this.projects = new ProjectCollection(PROJECTS_RAW.map((p) => new Project(p)));
      this.modal = new ProjectModal(Dom.id('projectModal'));

      // Type writer on the header area
      this.typewriter = new Typewriter({
        el: Dom.id('heroLoop'),
        lines: [
          'Scalable Multi-Agent Systems',
          'RAG Pipelines with Vector Databases and Tool Integration.',
          'LLM-Driven Workflow Automation.',
          'Fine-Tuning and Performance Optimization for Domain-Specific AI Models.',
          'Dataset Curation and Feature Engineering.',
          'Python Applications for Business Automation.',
        ],
      });

      this.bg = new ParticlesBackground(Dom.id('bgCanvas'));
    }

    setYear() {
      const y = Dom.id('year');
      if (y) y.textContent = String(new Date().getFullYear());
    }

    openProjectFromHash() {
      const repo = UrlState.getProject();
      if (!repo) return;
      const p = this.projects.findByRepo(repo);
      if (p) this.modal.open(p);
    }

    render() {
      const query = (this.searchQuery || '').trim();
      const items = this.projects.filter({ cat: this.currentCat, query });
      const total = items.length;
      const limit = CONFIG.projectLimit || 12;
      const visible = this.projects.visible({ items, query, showAll: this.showAll, limit });

      if (this.grid) {
        this.grid.innerHTML = '';
        for (const p of visible) this.grid.appendChild(this.createProjectCard(p));
      }

      if (this.projectsMeta) {
        if (total === 0) {
          this.projectsMeta.textContent = query
            ? 'No projects match your search.'
            : 'No projects to show.';
        } else if (query) {
          this.projectsMeta.textContent = `Found ${total} project${total === 1 ? '' : 's'}`;
        } else if (total <= limit) {
          this.projectsMeta.textContent = `${total} project${total === 1 ? '' : 's'}`;
        } else {
          this.projectsMeta.textContent = `Showing ${visible.length} of ${total} projects`;
        }
      }

      if (this.projectsToggle) {
        if (query || total <= limit) {
          this.projectsToggle.style.display = 'none';
        } else {
          this.projectsToggle.style.display = 'inline-flex';
          this.projectsToggle.textContent = this.showAll ? 'Show less' : 'View all projects';
          this.projectsToggle.setAttribute('aria-expanded', this.showAll ? 'true' : 'false');
        }
      }

      this.reveal.observeAll('.fade');
    }

    createProjectCard(project) {
      const card = document.createElement('article');
      card.className = 'card p-card fade';
      card.setAttribute('aria-label', project.title);
      card.setAttribute('role', 'button');
      card.setAttribute('aria-haspopup', 'dialog');
      card.tabIndex = 0;

      const top = document.createElement('div');
      top.className = 'p-top';
      ImageResolver.mount(top, project, { mode: 'card' });

      const body = document.createElement('div');
      body.className = 'p-body';

      const typeBar = document.createElement('div');
      typeBar.className = 'p-typebar';
      typeBar.textContent = project.type;

      const h = document.createElement('h3');
      h.textContent = project.title;

      const impact = document.createElement('p');
      impact.className = 'p-impact';
      impact.textContent = project.impact;

      const d = document.createElement('p');
      d.textContent = project.desc;

      const tags = document.createElement('div');
      tags.className = 'p-tags';
      (Array.isArray(project.tags) ? project.tags : []).forEach((t) => {
        const chip = document.createElement('span');
        chip.className = 'tag';
        chip.textContent = t;
        tags.appendChild(chip);
      });


      // Buttons on Project Containers
      const btnContainer = document.createElement("div");
      btnContainer.className = "p-buttons";

      if (project.repo) {
        const gitRepo = document.createElement("a");
        gitRepo.className = "btn repo";
        gitRepo.href = project.githubUrl;
        gitRepo.target = "_blank";
        gitRepo.rel = "noopener noreferrer";
        gitRepo.textContent = 'Github';
        btnContainer.appendChild(gitRepo);
      }

      if (project.hfSpace) {
        const hf = document.createElement("a");
        hf.className = "btn repo";
        hf.href = project.hfSpace;
        hf.target = "_blank";
        hf.rel = "noopener noreferrer";
        hf.textContent = "HF Space";
        btnContainer.appendChild(hf);
      }

      if (project.demo) {
        const demo = document.createElement('a');
        demo.className = "btn repo";
        demo.href = project.demo;
        demo.target = '_blank';
        demo.rel = 'noopener noreferrer';
        demo.textContent = 'Quick Demo';
        btnContainer.appendChild(demo);
      }

      // Footer Project Container (Tag + Buttons)
      const projectFooter = document.createElement("div")
      projectFooter.className = "p-footer";
      projectFooter.append(tags, btnContainer);

      body.append(h, impact, d, projectFooter);
      card.append(typeBar, top, body);

      const openDetails = () => this.modal.open(project);

      card.addEventListener('click', (e) => {
        const isLink = e.target && e.target.closest && e.target.closest('a');
        if (isLink) return;
        openDetails();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDetails();
        }
      });

      return card;
    }

    bindFilters() {
      const btns = Dom.qsa('.fbtn');
      for (const b of btns) {
        b.addEventListener('click', () => {
          for (const x of btns) x.classList.remove('active');
          b.classList.add('active');
          this.currentCat = b.dataset.cat || 'all';
          this.showAll = false;
          this.render();
        });
      }
    }

    bindSearch() {
      if (!this.searchInput) return;

      const syncClear = () => {
        if (!this.clearSearch) return;
        this.clearSearch.style.display = this.searchInput.value ? 'flex' : 'none';
      };

      const apply = () => {
        this.searchQuery = this.searchInput.value || '';
        this.showAll = false;
        this.render();
        syncClear();
      };

      this.searchInput.addEventListener('input', Debounce.wrap(apply, 80));

      if (this.clearSearch) {
        this.clearSearch.addEventListener('click', () => {
          this.searchInput.value = '';
          apply();
          this.searchInput.focus();
        });
      }

      syncClear();
    }

    bindProjectsToggle() {
      if (!this.projectsToggle) return;
      this.projectsToggle.addEventListener('click', () => {
        this.showAll = !this.showAll;
        this.render();
      });
    }

    bindTechToggle() {
      if (!this.techToggle || !this.fullTech) return;

      const setOpen = (open) => {
        this.fullTech.hidden = !open;
        this.techToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        this.techToggle.textContent = open ? 'Hide Full Stack' : 'View Full Stack';
        if (open) this.reveal.observeAll('#fullTech .fade');
      };

      setOpen(false);

      this.techToggle.addEventListener('click', () => {
        setOpen(this.fullTech.hidden);
      });
    }

    bindScroll() {
      const onScroll = () => {
        const doc = document.documentElement;
        const st = doc.scrollTop || document.body.scrollTop || 0;
        const max = doc.scrollHeight - doc.clientHeight;

        if (this.scrollProgress) {
          const pct = max ? (st / max) * 100 : 0;
          this.scrollProgress.style.width = `${pct}%`;
        }

        if (this.topBtn) this.topBtn.classList.toggle('show', st > 800);
        if (this.navBar) this.navBar.classList.toggle('scrolled', st > 10);

        this.nav.update();
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    bindTopButton() {
      if (!this.topBtn) return;
      this.topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    bindMobileMenu() {
      const toggle = Dom.id('navToggle');
      const links = Dom.id('navLinks');
      if (!toggle || !links) return;

      const close = () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      };

      const open = () => {
        links.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      };

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (links.classList.contains('open')) close();
        else open();
      });

      for (const a of links.querySelectorAll('a')) {
        a.addEventListener('click', () => close());
      }

      document.addEventListener('click', (e) => {
        if (!links.classList.contains('open')) return;
        if (links.contains(e.target) || toggle.contains(e.target)) return;
        close();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
      });
    }

    bindBrandHome() {
      if (!this.brandBtn) return;
      this.brandBtn.addEventListener('click', () => {
        const home = Dom.id('home');
        if (home) home.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    bindSmoothAnchors() {
      for (const a of Dom.qsa('a[href^="#"]')) {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href');
          const target = href ? document.querySelector(href) : null;
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }

    init() {
      this.theme.init();
      this.setYear();
      this.typewriter.start();

      this.emailCopy.init();

      this.modal.bind();

      this.render();
      this.openProjectFromHash();
      window.addEventListener('hashchange', () => this.openProjectFromHash());
      this.reveal.observeAll('.fade');
      this.bindFilters();
      this.bindProjectsToggle();
      this.bindSearch();
      this.bindTechToggle();
      this.bindScroll();
      this.bindTopButton();
      this.bindBrandHome();
      this.bindSmoothAnchors();
      this.bindMobileMenu();

      this.reveal.prime('.fade');
      document.documentElement.classList.remove('preload');
      this.bg.init();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp().init();
  });
})();
