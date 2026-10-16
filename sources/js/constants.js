// --- sources/js/constants.js ---
export const MILLISECONDS_PER_SECOND = 1000;
export const MILLISECONDS_PER_MINUTE = 60 * MILLISECONDS_PER_SECOND;
export const MILLISECONDS_PER_HOUR = 60 * MILLISECONDS_PER_MINUTE;
export const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

export const SERVER_TIMEZONE = "America/Toronto"; // used for determining Daylight Saving Time

export const BASE_OF_OPERATIONS_TOOLTIP = '<span title="Orbiter, Drifter\'s Camp, or Backroom">Base of Operations</span>';

// display names for stats and sections are translated via i18n (`stats.*`, `sectionName.*`)
export const TASKLIST_STAT_PROPERTIES = {
    "completed": "progress",
    "skipped": "skippedTasks",
    "hidden": "hiddenTasks",
};

// where this build's source code lives (linked from the footer's commit hash)
export const SOURCE_REPOSITORY_URL = "https://github.com/SakuraWine/Task-Checklist";
