"use client";

import {
  Trophy,
  Brain,
  Code2,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import PerformanceChart from "@/components/charts/PerformanceChart";

const cards = [
  {
    title: "Aptitude",
    icon: Brain,
    desc: "Practice quantitative aptitude",
    value: "120+ Questions",
  },
  {
    title: "Coding",
    icon: Code2,
    desc: "Solve DSA problems",
    value: "45 Challenges",
  },
  {
    title: "Resume AI",
    icon: FileText,
    desc: "Analyze your resume",
    value: "ATS Score",
  },
  {
    title: "Leaderboard",
    icon: Trophy,
    desc: "Compete with students",
    value: "Top Rank",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 md:px-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Dashboard
          </h1>

          <p className="text-zinc-400 mt-2 text-lg">
            Track your placement preparation journey
          </p>
        </div>

        <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Upgrade
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.07,
              }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 transition-all"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-zinc-800 p-3 rounded-2xl">
                    <Icon className="w-7 h-7" />
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition" />
                </div>

                <h2 className="text-2xl font-semibold mb-2">
                  {card.title}
                </h2>

                <p className="text-zinc-400 text-sm mb-6">
                  {card.desc}
                </p>

                <div className="text-xl font-bold">
                  {card.value}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ANALYTICS SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        {/* CHART */}
        <div className="xl:col-span-2">
          <PerformanceChart />
        </div>

        {/* PROGRESS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Weekly Goal
          </h2>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-zinc-400">Progress</span>
              <span>75%</span>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-white h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-400">Aptitude Tests</span>
              <span>12/15</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-400">Coding Problems</span>
              <span>30/40</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-400">Mock Interviews</span>
              <span>4/5</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}