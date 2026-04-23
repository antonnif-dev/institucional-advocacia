import './App.css';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import DepositionsCard from "./components/DepositionsCard";
import DepositionsCarousel from "./components/DepositionsCarousel";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
></motion.div>

const services = [
  { title: "Direito Civil", description: "Identificamos ilegalidades de maneira..." },
  { title: "Direito Penal", description: "Atuação urgente..." },
  { title: "Direito Tributário", description: "Atendimento completo..." },
  { title: "Direito Trabalhista", description: "Identificamos ilegalidades de maneira..." },
  { title: "Direito Empresarial", description: "Atuação urgente..." },
  { title: "Direito do Consumidor", description: "Atendimento completo..." },
]

const depositions = [
  {
    title: "Fulano da Silva",
    description: "Gostei dos serviços, os advogados foram muito atenciosos no meu caso. A advogada fulana não desiste!",
    image: "../cliente1.jpg"
  },
  {
    title: "Siclano de Souza",
    description: "Gostei dos serviços, os advogados foram muito atenciosos no meu caso. A advogada fulana não desiste!",
    image: "../cliente1.jpg"
  },
  {
    title: "Beltrano de Morais",
    description: "Gostei dos serviços, os advogados foram muito atenciosos no meu caso. A advogada fulana não desiste!",
    image: "../cliente1.jpg"
  },
  {
    title: "Fulano da Silva",
    description: "Gostei dos serviços, os advogados foram muito atenciosos no meu caso. A advogada fulana não desiste!",
    image: "../cliente1.jpg"
  },
  {
    title: "Siclano de Souza",
    description: "Gostei dos serviços, os advogados foram muito atenciosos no meu caso. A advogada fulana não desiste!",
    image: "../cliente1.jpg"
  },
  {
    title: "Beltrano de Morais",
    description: "Gostei dos serviços, os advogados foram muito atenciosos no meu caso. A advogada fulana não desiste!",
    image: "../cliente1.jpg"
  },
]

function App() {
  const whatsappUrl = `https://wa.me/5599999999999?text=${encodeURIComponent("Olá, entro em contato para saber sobre seus serviços de advocacia....")}`
  const phoneUrl = `tel:+5599999999999`

  return (
    <>
      <div className='p-2 bg-[#420a0a] space-y-10 border-2 border-black'>
        {/* Navbar */}
        <section className='flex justify-between p-2 mb-15'>
          <div className='flex flex-col items-center'>
            <motion.img
              src="../saas-juridico2.png"
              className="w-16 md:w-28"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
            <p>Brandão Guedes</p>
          </div>
          <div className='flex text-lg md:text-3xl text-white font-bold gap-2 md:gap-4 mt-8 md:mt-20 md:mr-5'>
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Serviços
            </motion.a>

            <motion.a
              href="#equipe"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Equipe
            </motion.a>

            <motion.a
              href="#contato"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contato
            </motion.a>
          </div>
        </section>

        {/* Apresentação */}
        <section className='flex justify-center items-center px-5 mb-15 gap-2 md:gap-10'>
          <div className='flex flex-col space-y-5 flex-1'>
            <div>
              <h2>Precisa de um escritório que cuida do seu caso?</h2>
              <p className="text-gray-300">
                Especialistas em Direito Penal e Civil, com atuação rápida e personalizada para proteger seus direitos.
              </p>
            </div>
            <div className='flex justify-center gap-2'>
              <Button size="small" className='w-22 md:w-32' href={whatsappUrl} variant="contained" color="success">Enviar mensagem</Button>
              <Button size="small" className='w-22 md:w-32' href={phoneUrl} variant="contained" color="primary">Ligue agora</Button>
            </div>
          </div>

          <div className='flex-[1.2] flex items-center'>
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src="../advogada-perfil.jpg"
                className="w-md h-65"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

        </section>

        {/* Serviços */}
        <section id="servicos" className='space-y-5'>
          <div className='flex justify-center flex-col'>
            <h2>Nossas áreas de atuação</h2>
            <p>Compromisso de defender você em ações de:</p>
          </div>
          <section className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </section>
        </section>

        {/* Casos */}
        <section className='space-y-5'>
          <h2>Casos que atendemos</h2>
          <div className='flex flex-row justify-center gap-5 md:gap-15'>
            <div>
              <p className='text-xs md:text-xl'>✓Acompanhamento em Delegacia</p>
              <p className='text-xs md:text-xl'>✓Habeas Corpus Urgente</p>
              <p className='text-xs md:text-xl'>✓Acompanhamento em Delegacia</p>
              <p className='text-xs md:text-xl'>✓Habeas Corpus Urgente</p>
              <p className='text-xs md:text-xl'>✓Acompanhamento em Delegacia</p>
              <p className='text-xs md:text-xl'>✓Habeas Corpus Urgente</p>
              <p className='text-xs md:text-xl'>✓Acompanhamento em Delegacia</p>
              <p className='text-xs md:text-xl'>✓Habeas Corpus Urgente</p>
            </div>
            <div>
              <p className='text-xs md:text-xl'>✓Recursos aos Tribunais Superiores</p>
              <p className='text-xs md:text-xl'>✓Crimes contra a Honra</p>
              <p className='text-xs md:text-xl'>✓Recursos aos Tribunais Superiores</p>
              <p className='text-xs md:text-xl'>✓Crimes contra a Honra</p>
              <p className='text-xs md:text-xl'>✓Recursos aos Tribunais Superiores</p>
              <p className='text-xs md:text-xl'>✓Crimes contra a Honra</p>
              <p className='text-xs md:text-xl'>✓Recursos aos Tribunais Superiores</p>
              <p className='text-xs md:text-xl'>✓Crimes contra a Honra</p>
            </div>
          </div>

        </section>

        <section id="equipe" className="space-y-5">
          <h2>Conheça nossa equipe</h2>

          <div className="flex md:flex-row gap-4 border p-2 items-center">

            <div className="flex justify-center items-center w-full md:w-1/2">
              <motion.img
                src="../advogada.jpg"
                className="w-[200px] md:w-[350px]"
                whileHover={{ scale: 1.09 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-4 w-full md:w-1/2">
              <h2>Doutora Fulano...</h2>
              <h4>Cursei Direito na Universidade Federal de Santa Maria e, após formada me dediquei a aprofundar meu conhecimento nos direitos das mulheres: fiz especialização em Direito de Família na PUCRS.</h4>
              <Button size="medium" href={whatsappUrl} variant="contained" color="success">
                Whatsapp
              </Button>
            </div>

          </div>

          <div className="flex flex-row-reverse gap-4 border p-2 items-center">

            <div className="flex justify-center items-center w-full md:w-1/2">
              <motion.img
                src="../advogada.jpg"
                className="w-[200px] md:w-[350px]"
                whileHover={{ scale: 1.09 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-4 w-full md:w-1/2">
              <h2>Doutora Siclano...</h2>
              <h4>Cursei Direito na Universidade Federal de Santa Maria e, após formada me dediquei a aprofundar meu conhecimento nos direitos das mulheres: fiz especialização em Direito de Família na PUCRS.</h4>
              <Button size="medium" href={whatsappUrl} variant="contained" color="success">
                Whatsapp
              </Button>
            </div>

          </div>
        </section>

        {/* Opiniões */}
        <section className='space-y-5'>
          <h2>O que dizem nossos clientes</h2>

          <DepositionsCarousel items={depositions} />

        </section>

        {/* Footer */}
        <section>
          <footer id="contato" className="">
            <div className="px-2 gap-10 space-y-5">
              <div>
                <h2 className="font-semibold">Entre em contato</h2>
              </div>

              <div className='flex w-full gap-5'>
                <div className="w-[65%] h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d937.3152879331892!2d-44.08788037672393!3d-19.99755124869005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1776710406594!5m2!1spt-BR!2sbr"
                    className="w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div className="w-[35%] flex flex-col justify-center">
                  <h3 className="font-semibold text-center">Contato</h3>
                  <ul className="text-gray-400 text-sm space-y-2 text-center wrap-break-word">
                    <li>(31) 98888-8888</li>
                    <li>atendimento@<br />brandaoguedes.<br />com.br</li>
                    <li>
                      Rua Cravinas , 118 <br />
                      Condomínio das Palmeiras, Ibirité - MG
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* RODAPÉ FINAL */}
            <div className="text-center text-sm text-white py-4 px-4">
              © 2026 Escritório Brandão Guedes. Todos os direitos reservados. <br />
              Desenvolvido por Antonni Dev
            </div>

          </footer>
        </section>

      </div>
    </>
  )
}

export default App