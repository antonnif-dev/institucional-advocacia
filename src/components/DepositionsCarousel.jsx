import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DepositionsCard from "./DepositionsCard";
import Button from "@mui/material/Button";

export default function DepositionsCarousel({ items }) {
    const [index, setIndex] = useState(0);
    const itemsPerView = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setIndex((prev) =>
            prev + 3 >= items.length ? 0 : prev + 3
        );
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0
                ? Math.max(items.length - 3, 0)
                : prev - 3
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