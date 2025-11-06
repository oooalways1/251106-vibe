// 게임 모드
export type GameMode = 'adventure' | 'practice' | 'challenge';

// 연산 타입
export type OperationType = 'multiplication' | 'division';

// 난이도
export type Difficulty = 'easy' | 'medium' | 'hard';

// 문제 타입
export interface Problem {
  id: string;
  type: OperationType;
  operand1: number;
  operand2: number;
  answer: number;
  remainder?: number; // 나눗셈의 나머지
  question: string;
  visualHelp?: VisualHelp;
  difficulty: Difficulty;
}

// 시각적 도움
export interface VisualHelp {
  type: 'blocks' | 'fruits' | 'animals';
  count: number;
  groups?: number;
}

// 사용자 답안
export interface UserAnswer {
  problemId: string;
  answer: number;
  remainder?: number;
  isCorrect: boolean;
  timeSpent: number; // 초 단위
  hintsUsed: number;
}

// 게임 세션
export interface GameSession {
  id: string;
  mode: GameMode;
  type: OperationType;
  difficulty: Difficulty;
  problems: Problem[];
  currentProblemIndex: number;
  answers: UserAnswer[];
  startTime: number;
  endTime?: number;
  score: number;
  stars: number;
}

// 캐릭터
export interface Character {
  id: string;
  name: string;
  avatar: string;
  level: number;
  experience: number;
  items: CharacterItem[];
}

// 캐릭터 아이템
export interface CharacterItem {
  id: string;
  type: 'hat' | 'clothes' | 'accessory' | 'background';
  name: string;
  image: string;
  price: number;
  owned: boolean;
  equipped: boolean;
}

// 업적
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: number;
  progress: number;
  target: number;
}

// 학습 통계
export interface LearningStats {
  totalProblems: number;
  correctAnswers: number;
  totalTime: number; // 초 단위
  averageTime: number;
  multiplicationStats: OperationStats;
  divisionStats: OperationStats;
  dailyStreak: number;
  lastPlayedDate: string;
}

// 연산별 통계
export interface OperationStats {
  total: number;
  correct: number;
  averageTime: number;
  byDifficulty: {
    easy: { total: number; correct: number };
    medium: { total: number; correct: number };
    hard: { total: number; correct: number };
  };
}

// 사용자 프로필
export interface UserProfile {
  id: string;
  name: string;
  character: Character;
  coins: number;
  stats: LearningStats;
  achievements: Achievement[];
  wrongAnswers: Problem[]; // 오답 노트
  createdAt: number;
  updatedAt: number;
}

// 게임 설정
export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  showVisualHelp: boolean;
  timeLimit: boolean;
  timeLimitSeconds: number;
  difficulty: Difficulty;
}

// 힌트
export interface Hint {
  level: number;
  text: string;
  visualAid?: string;
}


