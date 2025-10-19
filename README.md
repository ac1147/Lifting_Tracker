# 🏋️ Personal Workout Logger & Progress Analysis

This project is a personalized fitness tracking system using **Google Sheets**, **Google Apps Script**, and **Google Colab**. It automates workout data collection and applies statistical analysis to monitor strength and volume progression over time.

Rather than just log workouts, the system aims to answer key questions like:
- *Am I actually getting stronger?*
- *Which exercises show the most improvement?*
- *How does volume relate to progress?*

---

## 🧠 System Overview

- **Google Sheets** is used as a front-end to log workout data.
- A custom **Google Apps Script** moves data from a daily entry sheet to a master database sheet with the click of a button.
- **Google Colab (Python)** is used to analyze the data, estimate strength improvements, and visualize progress over time.

---

## 📊 Key Methods for Tracking Progress

### 1. 📈 Volume Over Time

For each exercise, training **volume** is calculated per session as:

```
Volume = Sets × Reps × Weight
```

- The max volume per day for each exercise is plotted against time.
- These plots help identify trends in training load and progression.
- Useful for monitoring hypertrophy training and workload management.

---

### 2. 🏋️ Estimated 1RM Calculation (Brzycki Formula)

To estimate strength gains without actual max testing, the **Brzycki formula** is applied to the heaviest set in each workout:

```
Estimated 1RM = Weight / (1.0278 - 0.0278 × Reps)
```

- 1RM values are plotted over time to track strength progression.
- This allows comparison across different rep ranges and load intensities.

---

### 3. 📈 Correlation & Statistical Analysis

A summary table is generated for all tracked exercises with the following metrics:

| Metric        | Description |
|---------------|-------------|
| **Corr**      | Pearson correlation between workout date and estimated 1RM (how linearly strength increases) |
| **pValue**    | Statistical significance of the correlation (confidence in improvement trend) |
| **Avg % Inc** | Average session-over-session percent increase in 1RM |
| **1RM Diff**  | Total estimated 1RM improvement from first to last session |

#### 📋 Sample Output

```
             Exercise             Corr     pValue     Avg % Inc   1RM diff
0     Baysian Cable Curls     0.169472   0.562454     0.87%       +2.23
1    Tricpe Overhead Rope     0.555358   0.031618     1.07%       +4.24
2    Tricep Rope Pushdown     0.887700   0.000010     2.56%      +13.45
3           Incline Press     0.891464   0.000008     1.77%      +10.87
4          Shoulder Press     0.920751   0.000001     1.99%      +13.55
5             Fly Machine     0.933810   0.000000     3.81%      +66.01
6           Lat Pull Down     0.941451   0.000001     2.50%      +47.59
7              Seated Row     0.954896   0.000000     2.64%      +48.20
8    Cable Lateral Raises     0.965868   0.000000     5.98%       +6.84
9   Preacher Curl Machine     0.981230   0.000000     3.49%      +41.58
10      Rear Delt Machine     0.988960   0.000000     3.66%      +45.40
11             Ab Machine     1.000000   0.000000     8.15%      +16.18
```

These insights help answer:
- Which lifts are improving most?
- Where progress has plateaued
- How consistent training leads to strength gains

---

## 🛠 Tools & Libraries Used

- **Google Apps Script** – for automation within Google Sheets
- **Google Colab** – for interactive analysis using Python
- `pandas` – data manipulation
- `matplotlib` – visualizations
- `scipy.stats` – correlation and p-value calculations

---

## 💡 Key Learnings

- Built a complete pipeline from data entry to analysis using accessible tools
- Applied real-world data science techniques to personal data
- Improved awareness of training effectiveness through statistical tracking

---

## 📎 Notes

This project is currently built for **personal use only** and is not intended as a general-purpose application. The focus is on demonstrating **real-world scripting, automation, and data analysis** using fitness data.
