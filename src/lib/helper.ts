/**
 * Returns a hex color (without `#`) representing a score level.
 *
 * Color mapping:
 * - Green  (`22c55e`) → score ≥ 8 (excellent)
 * - Yellow (`eab308`) → score ≥ 6 (average)
 * - Red    (`dc2626`) → score < 6 (poor)
 *
 * @param {number} score - Numeric score value (expected range: 0–9).
 * @returns {string} Hex color code without the leading `#`.
 */
export const getColorHex = (score: number): string => {
  if (score >= 8) return "22c55e";
  if (score >= 6) return "eab308";
  return "dc2626";
};


/**
 * ressolveFeedback Function
 * Takes score of a category and returns detailed feedback
 * @param score
 * @returns feedback
 */
export const ressolveFeedback = (score: number): string => {
  if (score >= 8) {
    return "Excellent performance with strong control";
  }
  if (score >= 6) {
    return "Good performance with minor inaccuracies";
  }
  return "Needs improvement";
};