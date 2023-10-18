import { Badge } from "@/components/ui/badge";
import { categoryIcon } from "@/constants/category-icons";
import { Category } from "@prisma/client";

interface Props {
  category: Category;
}

const CategoryItem = ({ category }: Props) => {
  return (
    <Badge
      variant={"outline"}
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
