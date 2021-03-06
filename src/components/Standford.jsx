import React, { useState } from 'react'
import './Standford.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Standfordpos1 from '../assets/Standford POSITIONS/Satandford pos 1.jpg'
import Standfordpos2 from '../assets/Standford POSITIONS/Satandford pos 2.jpg'
import Standfordpos3 from '../assets/Standford POSITIONS/Satandford pos 3.jpg'
import Standfordpos4 from '../assets/Standford POSITIONS/Satandford pos 4.jpg'
import Standfordpos5 from '../assets/Standford POSITIONS/Satandford pos 5.jpg'
import Standfordpos6 from '../assets/Standford POSITIONS/Satandford pos 6.jpg'
import Standfordpos7 from '../assets/Standford POSITIONS/standfordpos7.jpg'
import StandformGif1 from '../assets/Standford Animations/Standford anim 1.gif'
import StandformGif2 from '../assets/Standford Animations/Standford anim 2.gif'
import StandformGif3 from '../assets/Standford Animations/Standford anim 3.gif'
import StandformGif4 from '../assets/Standford Animations/Standford anim 4.gif'
import StandformGif5 from '../assets/Standford Animations/Standford anim 5.gif'
import tabela1 from '../assets/sttable1.jpg'
import tabela2 from '../assets/sttable2.jpg'
import tabela3 from '../assets/sttable3.jpg'
import InterfaceG from '../assets/Standford Teach Gif.gif'
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";
export default function Standford() {
    const [page, setPage] = useState(0);

    const changePageRight = () => {
        if (page == 0) {
            setPage(1)
        } else if (page == 1) {
            setPage(2)
        } else if (page == 2) {
            setPage(3)
        } else if (page == 3) {
            setPage(4)
        } else {
            setPage(0)
        }
    }
    const changePageLeft = () => {
        if (page == 0) {
            setPage(4)
        } else if (page == 1) {
            setPage(0)
        } else if (page == 2) {
            setPage(1)
        } else if (page == 3) {
            setPage(2)
        } else {
            setPage(3)
        }
    }
    return (
        <motion.div className="kuka">
            <div className="kuka__header">
                <motion.div
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -500 }}
                    transition={{ duration: 0.35 }}
                    className="kukaheader__left">
                    <h2>Projeto de<span style={{ color: "rgb(41, 231, 214)" }}> Rob??tica</span></h2>
                </motion.div>
                <motion.div
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -500 }}
                    transition={{ duration: 0.35, delay: 0.3 }}
                    className="kukaheader__right">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="links">Inicio</p>
                    </Link>
                    <Link to="Kuka" style={{ textDecoration: 'none' }}>
                        <p className="links">Kuka</p>
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="arrows">
                <motion.div
                    animate={{ x: [0, 0, 30, 0, 0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="arrowleft" onClick={() => changePageLeft()}>
                    <IoArrowUndoSharp className="arrow__left" />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 0, -30, 0, 0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="arrowright" onClick={() => changePageRight()}>
                    <IoArrowRedoSharp className="arrow__right" />
                </motion.div>
            </motion.div>
            {page == 0 &&
                <>
                    <div className="standfordpos">
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} exit={{ opacity: 0 }}>Poses</motion.h1>
                        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} exit={{ opacity: 0 }}>A obten????o destas poses ?? feita trav??s do comando KR5.plot( vari??vel ), sendo o que as distingue as os ??ngulos de cada junta</motion.h2>
                        <motion.div
                            initial={{ y: -2000 }}
                            animate={{ y: 0 }}
                            exit={{ y: -2000 }}
                            transition={{ duration: 1 }}
                            className="standfordpos__top">
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose qi = [0 0 0 0 0 0]</p>
                                <img src={Standfordpos1} className="standfordpos__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose qk1 = [ pi pi/2 0 0 0 0 ]</p>
                                <img src={Standfordpos2} className="standfordpos__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose qk2 = [ pi pi/2 pi/4 0 0 0 ]</p>
                                <img src={Standfordpos3} className="standfordpos__img" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 2000 }}
                            animate={{ y: 0 }}
                            exit={{ y: 2000 }}
                            transition={{ duration: 1 }}
                            className="standfordpos__bottom">
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose qk3 = [ pi pi/1.5 pi/4 0 0 0 ]</p>
                                <img src={Standfordpos4} className="standfordpos__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose qk4 = [ pi pi/1.5 pi/4 pi pi 0 ]</p>
                                <img src={Standfordpos5} className="standfordpos__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose qn = [ 0 0 pi/4 0 0 0 ]</p>
                                <img src={Standfordpos6} className="standfordpos__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordpos__card">
                                <p>Pose obtida pela fun????o ikine</p>
                                <img src={Standfordpos7} className="standfordpos__img" />
                            </motion.div>
                        </motion.div>
                    </div>
                </>
            }
            {page == 1 &&
                <>
                    <div className="standfordgifs">
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} exit={{ opacity: 0 }}>Anima????es</motion.h1>
                        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} exit={{ opacity: 0 }}>A obten????o destas poses ?? feita trav??s do comando KR5.plot( vari??vel ), sendo o que as distingue as os ??ngulos de cada junta</motion.h2>
                        <motion.div
                            initial={{ y: -2000 }}
                            animate={{ y: 0 }}
                            exit={{ y: -2000 }}
                            transition={{ duration: 1 }}
                            className="standfordgifs__top">
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordgifs__card">
                                <p>Transi????o da vari??vel qz para qk1</p>
                                <img src={StandformGif1} className="standfordgifs__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordgifs__card">
                                <p>Transi????o da vari??vel qk1 para qk2</p>
                                <img src={StandformGif2} className="standfordgifs__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordgifs__card">
                                <p>Transi????o da vari??vel qk2 para qk3</p>
                                <img src={StandformGif3} className="standfordgifs__img" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 2000 }}
                            animate={{ y: 0 }}
                            exit={{ y: 2000 }}
                            transition={{ duration: 1 }}
                            className="standfordgifs__bottom">
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordgifs__card">
                                <p>Transi????o da vari??vel qk3 para qk4</p>
                                <img src={StandformGif4} className="standfordgifs__img" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                className="standfordgifs__card">
                                <p>Transi????o da vari??vel qk4 para qn</p>
                                <img src={StandformGif5} className="standfordgifs__img" />
                            </motion.div>
                        </motion.div>
                    </div>
                </>
            }
            {page == 2 &&
                <>
                    <div className="standford__video">
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} exit={{ opacity: 0 }}>Interface Gr??fica</motion.h1>
                        <p>Esta interface gr??fica ?? conseguida atrav??s da fun????o teach e com isto podemos alterar as posi????es das juntas do rob?? de forma mais acess??vel</p>
                        <motion.div
                            initial={{ y: 500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            exit={{ y: 500 }}
                            className="standfordvideo__card">
                            <div className="standfordvideo__container">
                                <img src={InterfaceG} />
                            </div>

                        </motion.div>

                    </div>
                </>
            }
            {page==3 &&
            <>
            <>
            <div className="kukatabelas">
            <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}} exit={{opacity:0}}>Par??metros de Denavit-Hartenberg, Cinem??tica Inversa</motion.h1>
            <motion.div
            initial={{y:500,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1}}
            className="kukatabelas__container">
            <div className="kukatabelas__top">
            <img src={tabela1} />
            <p className="kukatabelas__topp">Os par??metros de Denavit???Hartenberg (tamb??m chamados de par??metros DH) s??o quatro par??metros associados a uma conven????o para fixar sistemas de refer??ncia aos elos de uma cadeia cinem??tica espacial, ou manipulador rob??tico.<br></br><br></br>
            Os quatro par??metros s??o:<br></br>
            <strong>theta:</strong>??ngulo em torno do z anterior, do x anterior at?? o x.<br></br>
            <strong>d</strong>: dist??ncia ao longo do z anterior at?? a normal comum.<br></br>
            <strong>a</strong>: comprimento da normal comum. No caso de uma junta rotacional, este ?? o raio ao redor do z anterior.<br></br>
            <strong>alpha</strong>: ??ngulo em torno da normal comum, do z anterior ao z novo<br></br><br></br>
            Na tabela podemos verificar que na coluna <strong>theta</strong> apenas a 3?? linha apresenta um valor real em vez de um <strong>q</strong>isto quer dizer que n??o ?? uma junta rotacional mas sim uma junta prism??tica ou de transla????o.<br></br> 
            Isto ?? verificado olhando para a coluna <strong>d</strong> que conseguimos ver que apresenta um <strong>q</strong> em vez de um numero real o que podemos ent??o concluir que este rob?? apresenta 5 juntas rotacionais e uma prism??tica.<br>
            </br>
            Na coluna a podemos verificar o raio ao redor do <strong>z</strong> anterior mas tamb??m, no caso da 3?? junta, podemos verificar o comprimento da normal comum. Estes valores apresentam-se todos a zero porque o rob?? come??a sem qualquer rota????o ou transla????o nas suas juntas.
            <br></br>
            Por ??ltimo, na coluna <strong>alpha</strong> est??o valores dos ??ngulos em torno da normal comum, do <strong>z</strong> anterior ao <strong>z</strong> novo.
            </p>
            <hr></hr>
            </div>
            <div className="kukatabelas__bot">
               
            <img src={tabela2} />
            <p className="kukatabelas__topp">Esta matriz foi conseguida atrav??s da fun????o <strong>fkine</strong> da pose <strong>qn</strong>. O output ?? uma matriz (4x4) e representa a transforma????o homog??nea da pose <strong>qn</strong>.</p>
               <hr></hr>
            <img src={tabela3} />
            <p className="kukatabelas__topp">
            Estas coordenadas foram conseguidas atrav??s da fun????o <strong>ikine</strong> da transforma????o homog??nea feita anteriormente. O output desta fun????o s??o um conjunto de coordenadas das juntas (1xN) que corresponde ?? pose do efetor final.<br></br>
                Tamb??m conseguimos ver que esta fun????o demorou 0.016173 segundos a realizar e isto ?? conseguido atrav??s das fun????es <strong>tic</strong>tic e <strong>toc</strong>. A fun????o <strong>tic</strong> come??a um cron??metro e o <strong>toc</strong> para o cronometro e calcula o tempo que demorou a fazer a fun????o foi pedida.</p>
                        </div>
            </motion.div>
            </div>
           
            </>
            </>
            }
            {page == 4 &&
                <>
                    <div className="standford__codigo">
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} exit={{ opacity: 0 }}>C??digo</motion.h1>
                        <motion.div
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            exit={{ y: 1000 }}
                            transition={{ duration: 1 }} className="standfordcodigo__card">
                            <div className="standfordcodigo__text">
                                <p><span style={{ color: 'green' }}>
                                    %             th    d       a    alpha<br></br>
                                </span>
                                    L(1) = Link([ 0     0.412   0   -pi/2     0]);<br></br>
                                    L(2) = Link([ 0     0.154   0    pi/2     0]);<br></br>
                                    L(3) = Link([ -pi/2 0       0    0        1]);  % PRISMATIC link, faz com que o bra??o do nosso rob?? se estenda<br></br>
                                    L(4) = Link([ 0     0       0   -pi/2     0]);<br></br>
                                    L(5) = Link([ 0     0       0    pi/2     0]);<br></br>
                                    L(6) = Link([ 0     0       0    0        0]);<br></br>
                                    <br></br>
                                    <span style={{ color: 'green' }}>
                                        %theta = ??ngulo da articula????o<br></br>
                                        %d = offset do link da posi????o inicial<br></br>
                                        %a = length do link<br></br>
                                        %alpha = orienta????o do link (em radianos)<br></br>

                                        <br></br>
                                        %limita at?? onde as juntas(joints) podem ir [min max]<br></br>
                                    </span>
                                    L(1).qlim = [-170 170]*pi/180;<br></br>
                                    L(2).qlim = [-170 170]*pi/180;<br></br>
                                    L(3).qlim = [12 12+38] * 0.0254;<br></br>
                                    L(4).qlim = [-170 170]*pi/180;<br></br>
                                    L(5).qlim = [-90 90]*pi/180;<br></br>
                                    L(6).qlim = [-170 170]*pi/180;<br></br>
                                    <br></br>
                                    stanf = SerialLink(L, 'name', 'Stanford arm');<br></br>
                                    <br></br>
                                    <span style={{ color: 'green' }}>
                                        %Uma class que representa um arm-type robot. Os argumentos que leva s??o os<br></br>
                                        %nossos links criados em cima e definir o nome do rob?? como 'Stanford arm'<br></br>

                                        <br></br>
                                        %posi????es do nosso rob??<br></br>
                                    </span>
                                    qz = [0 0 0 0 0 0];<br></br>
                                    qk1 = [pi pi/2 0 0 0 0];<br></br>
                                    qk2 = [pi pi/2 pi/4 0 0 0];<br></br>
                                    qk3 = [pi pi/1.5 pi/4 0 0 0];<br></br>
                                    qk4 = [pi pi/1.5 pi/4 pi pi 0];<br></br>
                                    qn = [0 0 pi/4 0 0 0];<br></br>
                                    <br></br>
                                    <span style={{ color: 'green' }}>
                                        %anima????o entre duas posi????es e o tempo de anima????o<br></br>
                                    </span>
                                    qa1 = jtraj(qz,qk1,30);<br></br>
                                    qa2 = jtraj(qk1,qk2,30);<br></br>
                                    qa3 = jtraj(qk2,qk3,30);<br></br>
                                    qa4 = jtraj(qk3,qk4,30);<br></br>
                                    qa5 = jtraj(qk4,qn,30);<br></br>
                                    <br></br>
                                    <span style={{ color: 'green' }}>
                                    %ir buscar a transforma????o homog??nea que representa a pose</span><br></br>
                                    T = stanf.fkine(qn);<br></br>
                                    <span style={{ color: 'green' }}><br></br>
                                    %Aqui temos as coordenadas das juntas(1xN) correspondentes ?? pose end-factor do robo KR5 </span><br></br>
                                    q = stanf.ikine(T, [1 1 1 0 0 1]);<br></br>
                                    <span style={{ color: 'green' }}><br></br>
                                    %A fun????o tic e toc serve para mostrar o intervalo de tempo </span><br></br>
                                    %que demora a fazer um determinado calculo.<br></br>
                                    tic; stanf.ikine(T, [1 1 1 0 0 1]); toc<br></br>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            }
        </motion.div>
    )
}
