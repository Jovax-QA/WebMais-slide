import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Bug, Clock, ShieldAlert, Activity, RefreshCcw, CheckCircle, Target, Users, TrendingDown, ArrowRight, Brain, Cpu, FileText, TestTube2, Zap, Network, Bot, GitBranch, Lightbulb, Workflow } from "lucide-react";
import webmaisScreenshot from "@assets/image_1778523439123.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Cenário", href: "#scenario" },
  { name: "Impacto", href: "#impact" },
  { name: "Solução", href: "#solution" },
  { name: "Case", href: "#case-study" },
  { name: "Evolução", href: "#timeline" },
  { name: "2026 IA", href: "#ai-2026" },
];

export default function Presentation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const costData = [
    { name: 'Desenvolvimento', custo: 1, color: '#21293b' },
    { name: 'QA / Homologação', custo: 10, color: '#313e59' },
    { name: 'Produção (Cliente)', custo: 100, color: '#f26522' },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* 1. Header/Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Web</span><span className="text-primary">Mais</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* 2. Hero — Abertura Impactante */}
        <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
          
          {/* Tech Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <Activity className="w-4 h-4" />
                <span>Relatório Executivo de Risco</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
                Cada deploy sem testes automatizados é uma <span className="text-primary">aposta em produção.</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="space-y-4 mb-12 border-l-2 border-primary/50 pl-6">
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Hoje o cliente descobre os problemas antes da empresa.
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Bug em produção não é apenas problema técnico. <strong className="text-white font-medium">É desgaste comercial.</strong>
                </p>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mb-12">
                A automação de testes deixou de ser um diferencial tecnológico. Hoje, ela representa a maturidade mínima esperada em engenharia de software para indústrias e distribuidoras.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg" onClick={(e: any) => scrollTo(e, '#scenario')}>
                  Entender o Cenário <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3. O Cenário Atual — Sem Automação */}
        <section id="scenario" className="py-32 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16 max-w-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">O Cenário Atual</h2>
              <p className="text-xl text-muted-foreground">
                Operar sem automação significa operar no modo reativo. Onde processos manuais falham e a velocidade compromete a qualidade.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {[
                { icon: Bug, title: "Bugs Recorrentes", desc: "Falhas que chegam constantemente ao ambiente de produção." },
                { icon: RefreshCcw, title: "Regressão", desc: "Funcionalidades antigas quebrando após novas implementações." },
                { icon: Clock, title: "Tempo Excessivo", desc: "Horas gastas com testes manuais repetitivos e lentos." },
                { icon: ShieldAlert, title: "Insegurança", desc: "Medo constante ao publicar novas versões do sistema." },
                { icon: Users, title: "Validação Humana", desc: "Dependência excessiva de pessoas para garantir a qualidade." },
                { icon: Target, title: "Imprevisibilidade", desc: "Falta de previsibilidade e prazos estourados nas entregas." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 border border-border">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto flex gap-6 items-start">
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShieldAlert className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">O que é Regressão?</h3>
                  <p className="text-lg text-muted-foreground">
                    Ocorre quando uma nova funcionalidade adicionada ao sistema impacta e quebra funcionalidades já existentes — e a equipe não percebe antes da publicação. É o problema mais caro e frustrante para o cliente final.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Impacto no Negócio */}
        <section id="impact" className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                  O Impacto no Negócio
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8">
                  O problema vai muito além da tecnologia. É sobre relacionamento, custos ocultos e credibilidade no mercado.
                </motion.p>

                <div className="space-y-4">
                  {[
                    "Perda de credibilidade com clientes",
                    "Aumento expressivo de chamados e suporte",
                    "Equipe trabalhando de forma puramente reativa",
                    "Custos invisíveis aumentando continuamente",
                    "Maior risco operacional a cada release"
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
                      <TrendingDown className="w-6 h-6 text-destructive shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-2 text-center">Custo de detectar erro</h3>
                <p className="text-sm text-muted-foreground text-center mb-10">Desenvolvimento vs. Produção</p>
                
                <div className="h-[300px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={costData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" vertical={false} />
                      <XAxis dataKey="name" stroke="#8b949e" tick={{fill: '#8b949e'}} />
                      <YAxis stroke="#8b949e" tick={{fill: '#8b949e'}} />
                      <Tooltip 
                        cursor={{fill: '#1a2235'}}
                        contentStyle={{ backgroundColor: '#0d1117', borderColor: '#30363d', color: '#fff' }}
                        formatter={(value: number) => [`${value}x o custo inicial`, 'Custo Multiplicado']}
                      />
                      <Bar dataKey="custo" radius={[4, 4, 0, 0]}>
                        {costData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 text-center text-sm text-muted-foreground bg-background/50 p-4 rounded-lg border border-border/50">
                  Um bug encontrado em produção custa até <strong>100 vezes mais</strong> para ser corrigido do que se fosse detectado na fase de desenvolvimento.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Como a Automação Resolve */}
        <section id="solution" className="py-32 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                Como a Automação Resolve
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Processos robustos que operam silenciosamente, garantindo a estabilidade estrutural do ERP a cada nova linha de código.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {[
                  { title: "Validação Contínua", desc: "Valida funcionalidades críticas a cada alteração no sistema." },
                  { title: "Prevenção de Regressões", desc: "Detecta imediatamente se um código novo quebrou uma regra antiga." },
                  { title: "Velocidade de Execução", desc: "Executa milhares de validações complexas em poucos minutos." },
                  { title: "Deploys Seguros", desc: "Cria 'Quality Gates' que impedem código com falha de ir para produção." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Activity className="w-64 h-64" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">Tecnologia de Ponta</h3>
                
                <div className="flex flex-wrap gap-3 mb-10 relative z-10">
                  {["Playwright", "Cypress", "Selenium", "Jenkins", "GitHub Actions", "Testes E2E", "CI/CD"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-background rounded-xl p-6 border border-border relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-muted-foreground">Pipeline Status</span>
                    <span className="flex items-center gap-1 text-emerald-500 text-xs font-bold uppercase tracking-wider"><CheckCircle className="w-3 h-3"/> Passed</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-emerald-500/20 rounded overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>482 testes executados</span>
                      <span>03:45 min</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Caso Real — Experiência Prática */}
        <section id="case-study" className="py-32">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">O Poder da Prática</h2>
              <p className="text-xl text-primary font-medium italic">
                "Após implementar processos de homologação alinhados com o cliente e automação de testes cobrindo funcionalidades críticas, houve uma melhora significativa na estabilidade do sistema e no relacionamento com o cliente."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card border-destructive/20 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 text-destructive">
                      <TrendingDown className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">Antes da Automação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></div> Muitos problemas detectados após deploys</p>
                    <p className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></div> Cliente começou a perder a confiança técnica</p>
                    <p className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></div> Homologação distante da realidade do cliente</p>
                    <p className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0"></div> Regressões constantes passavam despercebidas</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-card border-primary h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <TrendingDown className="w-6 h-6 rotate-180" />
                    </div>
                    <CardTitle className="text-xl text-white">Depois da Automação</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-2 text-white"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Suíte automatizada para funcionalidades críticas</p>
                    <p className="flex items-start gap-2 text-white"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Regressões validadas automaticamente no pipeline</p>
                    <p className="flex items-start gap-2 text-white"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Queda drástica no número de bugs em produção</p>
                    <p className="flex items-start gap-2 text-white"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div> Entregas previsíveis e confiança recuperada</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Evolução da Qualidade de Software — Timeline */}
        <section id="timeline" className="py-32 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Evolução da Qualidade</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A tecnologia avança rápido. O que era feito manualmente ontem, hoje é validado por IA e automações autônomas.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
              
              {[
                { year: "Passado", title: "Era dos Testes Manuais", desc: "Lento, repetitivo e sujeito a falhas humanas extremas." },
                { year: "2004", title: "Selenium", desc: "O início da automação web estruturada." },
                { year: "2017", title: "Cypress", desc: "Automação moderna rodando diretamente no navegador." },
                { year: "2020", title: "Playwright", desc: "Testes rápidos, paralelos e cross-browser pela Microsoft." },
                { year: "Atual", title: "Integração CI/CD", desc: "Qualidade integrada diretamente no processo de entrega de código." },
                { year: "Futuro", title: "Automação baseada em IA", desc: "Playwright MCP, Chrome MCP e execuções autônomas que aprendem com o sistema." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 md:mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[11px] md:left-1/2 w-2 h-2 rounded-full bg-primary md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(242,101,34,0.2)]"></div>
                  
                  <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors inline-block w-full">
                      <span className="text-primary font-mono text-sm font-bold mb-2 block">{item.year}</span>
                      <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center max-w-3xl mx-auto bg-background p-6 rounded-2xl border border-border"
            >
              <p className="text-lg text-muted-foreground">
                <strong className="text-white">Atenção:</strong> Hoje existem ferramentas capazes de navegar autonomamente, executar fluxos completos e detectar falhas automaticamente — sem qualquer intervenção humana. Ficar para trás não é uma opção.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 8. Mensagem Estratégica — O Chamado Executivo */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight mb-16 text-white">
                "Automação de testes deixou de ser inovação. Hoje ela representa <span className="text-primary">maturidade mínima</span> em engenharia de software."
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[
                  "Empresas sem automação operam no modo reativo.",
                  "O cliente não pode continuar sendo o testador final.",
                  "Qualidade não pode depender apenas de validação manual.",
                  "Toda nova release sem automação aumenta o risco operacional."
                ].map((text, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-6 border-l-4 border-primary bg-card/50 backdrop-blur">
                    <p className="text-xl font-medium text-white/90">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8.5. Realidade 2026 — Hardness Engine e IA */}
        <section id="ai-2026" className="py-32 bg-card/30 border-y border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  <span>Estado da Arte 2026</span>
                </div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                  A Revolução da IA na Engenharia de Software
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Em 2026, a Hardness Engine transforma completamente o ciclo de desenvolvimento. 
                  O que antes levava semanas agora é feito em horas, com precisão e consistência inigualáveis.
                </motion.p>
              </motion.div>

              {/* Pipeline Interativa com IA */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <h3 className="text-2xl font-bold text-center mb-12 text-white">Pipeline Inteligente End-to-End</h3>
                
                <div className="relative">
                  {/* Linha conectora vertical */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 transform -translate-x-1/2 hidden md:block"></div>
                  
                  <div className="space-y-8">
                    {/* Etapa 1: Regras de Negócio */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-6 md:flex-row flex-col md:text-left text-center"
                    >
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto md:ml-auto md:mr-0">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-white">1. Definição de Regras</h4>
                          <p className="text-muted-foreground">
                            Especialistas definem regras de negócio e critérios de aceitação em linguagem natural.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center shrink-0 z-10">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-background/50 border border-border rounded-xl p-4">
                          <p className="text-sm text-muted-foreground font-mono">
                            "Usuário deve poder filtrar pedidos por data, status e valor total"
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Etapa 2: Planejamento do Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-6 md:flex-row flex-col md:text-left text-center"
                    >
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="bg-background/50 border border-border rounded-xl p-4">
                          <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Backend</span>
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Frontend</span>
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">QA</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            • 3 story points<br/>
                            • Dependências: API de filtros<br/>
                            • Critérios: 5 cenários
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center shrink-0 z-10">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto md:ml-auto md:mr-0">
                            <Lightbulb className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-white">2. IA Planeja o Card</h4>
                          <p className="text-muted-foreground">
                            A IA analisa requisitos e gera automaticamente tarefas técnicas e estimativas.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Etapa 3: Levantamento de Requisitos */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-6 md:flex-row flex-col md:text-left text-center"
                    >
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto md:ml-auto md:mr-0">
                            <Network className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-white">3. IA Levanta Requisitos</h4>
                          <p className="text-muted-foreground">
                            A IA identifica casos de uso, cenários de teste e edge cases automaticamente.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center shrink-0 z-10">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-background/50 border border-border rounded-xl p-4">
                          <div className="space-y-2 text-sm">
                            <p className="text-emerald-500">✓ Cenário: Filtrar por data inicial e final</p>
                            <p className="text-emerald-500">✓ Cenário: Filtrar por status múltiplo</p>
                            <p className="text-emerald-500">✓ Edge case: Data futura</p>
                            <p className="text-emerald-500">✓ Edge case: Valores negativos</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Etapa 4: Simulação de Testes */}
                    <motion.div 
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-6 md:flex-row flex-col md:text-left text-center"
                    >
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="bg-background/50 border border-border rounded-xl p-4">
                          <div className="flex items-center justify-center md:justify-end gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-xs text-muted-foreground">Chrome</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-xs text-muted-foreground">Firefox</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                              <span className="text-xs text-muted-foreground">Safari</span>
                            </div>
                          </div>
                          <div className="h-2 bg-emerald-500/20 rounded overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[92%]"></div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">92% de cobertura simulada</p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center shrink-0 z-10">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto md:ml-auto md:mr-0">
                            <TestTube2 className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-white">4. IA Simula Testes</h4>
                          <p className="text-muted-foreground">
                            A IA executa simulações virtuais e identifica potenciais falhas antes do desenvolvimento.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Etapa 5: Criação de Testes Automatizados */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-6 md:flex-row flex-col md:text-left text-center"
                    >
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto md:ml-auto md:mr-0">
                            <Bot className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-white">5. IA Cria Testes</h4>
                          <p className="text-muted-foreground">
                            Geração automática de testes E2E, unitários e de integração prontos para o pipeline.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center shrink-0 z-10">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-background/50 border border-border rounded-xl p-4 font-mono text-xs overflow-x-auto">
                          <pre className="text-primary">
{`test('filtro de pedidos', async () => {
  await page.goto('/pedidos');
  await page.fill('#data-inicio', '2026-01-01');
  await expect(page.locator('.pedido')).toBeTruthy();
});`}
                          </pre>
                        </div>
                      </div>
                    </motion.div>

                    {/* Etapa 6: Pipeline CI/CD */}
                    <motion.div 
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center gap-6 md:flex-row flex-col md:text-left text-center"
                    >
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="bg-background/50 border border-border rounded-xl p-4">
                          <div className="flex items-center justify-center md:justify-end gap-2 mb-3">
                            <span className="flex items-center gap-1 text-emerald-500 text-xs">
                              <CheckCircle className="w-3 h-3" /> Build
                            </span>
                            <span className="text-muted-foreground">→</span>
                            <span className="flex items-center gap-1 text-emerald-500 text-xs">
                              <CheckCircle className="w-3 h-3" /> Testes
                            </span>
                            <span className="text-muted-foreground">→</span>
                            <span className="flex items-center gap-1 text-emerald-500 text-xs">
                              <CheckCircle className="w-3 h-3" /> Deploy
                            </span>
                          </div>
                          <div className="flex items-center justify-center md:justify-end gap-4 text-xs text-muted-foreground">
                            <span>⏱️ 4min 32s</span>
                            <span>✅ 847 testes</span>
                            <span>🚀 Production</span>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center shrink-0 z-10">
                        <span className="text-primary font-bold">6</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12">
                        <div className="bg-card border border-primary/30 rounded-2xl p-6 hover:border-primary transition-colors">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto md:ml-auto md:mr-0">
                            <Workflow className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-2 text-white">6. Pipeline Autônomo</h4>
                          <p className="text-muted-foreground">
                            CI/CD totalmente automatizado com validações de IA em cada etapa do processo.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Stats da Hardness Engine */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
              >
                {[
                  { value: "10x", label: "Mais rápido", desc: "Tempo de desenvolvimento reduzido" },
                  { value: "80.0%", label: "Precisão", desc: "Testes gerados automaticamente" },
                  { value: "24/7", label: "Operação", desc: "Pipeline rodando continuamente" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="bg-card border border-primary/20 rounded-2xl p-8 text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                    <p className="text-muted-foreground">{stat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mensagem Final */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-3xl p-8 md:p-12 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Hardness Engine + IA</h3>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  "O futuro não é sobre substituir humanos por IA. É sobre ampliar nossa capacidade de entregar software de qualidade 
                  em velocidade e escala impossíveis de alcançar manualmente."
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Análise de Requisitos", "Geração de Código", "Testes Automatizados", "CI/CD Inteligente", "Monitoramento Preditivo"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 9. Encerramento */}
        <section className="py-32 border-t border-border">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-16">
                Quanto custa descobrir um problema <span className="text-destructive">apenas depois</span> que o cliente encontrou?
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { title: "Qualidade", subtitle: "gera confiança" },
                  { title: "Confiança", subtitle: "fortalece relacionamento" },
                  { title: "Automação", subtitle: "reduz riscos" },
                  { title: "Modernidade", subtitle: "automatiza continuamente" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-card p-8 rounded-2xl border border-border text-center flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-medium">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A escolha é clara: continuar no modo reativo ou abraçar a automação inteligente que já está transformando o mercado.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white/50">
              WebMais Sistemas
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebMais Sistemas. Apresentação Executiva de Qualidade e Automação.
          </p>
        </div>
      </footer>
    </div>
  );
}
