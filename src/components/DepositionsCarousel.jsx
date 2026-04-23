import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DepositionsCard from "./DepositionsCard";
import Button from "@mui/material/Button";

export default function DepositionsCarousel({ items }) {
    const [index, setIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    // RESPONSIVO
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth < 768 ? 1 : 3);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // AUTOPLAY
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 4000);

        return () => clearInterval(interval);
    }, [index, itemsPerView]);

    const next = () => {
        setIndex((prev) =>
            prev + itemsPerView >= items.length ? 0 : prev + 1
        );
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? items.length - itemsPerView : prev - 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">

            <motion.div
                className="flex"
                animate={{
                    x: `-${index * (100 / itemsPerView)}%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="min-w-[33.333%] max-w-[33.333%] px-2 box-border"
                    >
                        <DepositionsCard {...item} />
                    </div>
                ))}
            </motion.div>

            {/* BOTÕES */}
            <div className="absolute inset-0 flex justify-between items-center px-2">
                <Button variant="contained" onClick={prev}>
                    ←
                </Button>
                <Button variant="contained" onClick={next}>
                    →
                </Button>
            </div>
        </div>
    );
}