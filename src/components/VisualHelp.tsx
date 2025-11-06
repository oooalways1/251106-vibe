import { motion } from 'framer-motion';
import type { VisualHelp as VisualHelpType } from '../types';

interface Props {
  visualHelp: VisualHelpType;
}

const VisualHelp = ({ visualHelp }: Props) => {
  const { type, count, groups } = visualHelp;

  const getEmoji = () => {
    switch (type) {
      case 'blocks':
        return '🟦';
      case 'fruits':
        return '🍎';
      case 'animals':
        return '🐰';
      default:
        return '🟦';
    }
  };

  const emoji = getEmoji();

  // 곱셈: count개씩 groups개 그룹
  // 나눗셈: count개를 groups개 그룹으로 나누기
  const renderGroups = () => {
    if (!groups) {
      // 그룹이 없으면 단순히 count개만 표시
      return (
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from({ length: Math.min(count, 50) }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.02 }}
              className="text-3xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      );
    }

    // 그룹으로 나누어 표시
    const itemsPerGroup = Math.floor(count / groups);
    const remainder = count % groups;

    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {Array.from({ length: groups }).map((_, groupIndex) => {
          const itemsInThisGroup = groupIndex < remainder ? itemsPerGroup + 1 : itemsPerGroup;
          
          return (
            <motion.div
              key={groupIndex}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-white/50 rounded-xl p-3 border-2 border-gray-300"
            >
              <div className="flex flex-wrap gap-1 max-w-[150px]">
                {Array.from({ length: Math.min(itemsInThisGroup, 20) }).map((_, itemIndex) => (
                  <motion.span
                    key={itemIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: groupIndex * 0.1 + itemIndex * 0.02 }}
                    className="text-2xl"
                  >
                    {emoji}
                  </motion.span>
                ))}
                {itemsInThisGroup > 20 && (
                  <span className="text-sm text-gray-600 self-end">
                    ...+{itemsInThisGroup - 20}
                  </span>
                )}
              </div>
              <div className="text-center mt-2 text-sm font-bold text-gray-700">
                {itemsInThisGroup}개
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-purple-900 mb-1">시각적 도움</h3>
        <p className="text-sm text-purple-700">
          {groups ? `${count}개를 ${groups}개 그룹으로 나누기` : `${count}개`}
        </p>
      </div>
      
      <div className="max-h-[300px] overflow-y-auto">
        {renderGroups()}
      </div>

      {count > 50 && (
        <div className="text-center mt-4 text-sm text-purple-600">
          너무 많아서 일부만 표시했어요!
        </div>
      )}
    </div>
  );
};

export default VisualHelp;

