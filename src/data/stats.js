import { useTranslation } from "react-i18next";

export const getStatsData = (t) => [
  { id: 1, value: "1M+", label: t("stats.clients") },
  { id: 2, value: "120+", label: t("stats.branches") },
  { id: 3, value: "15+", label: t("stats.experience") },
  { id: 4, value: "24/7", label: t("stats.service") },
];