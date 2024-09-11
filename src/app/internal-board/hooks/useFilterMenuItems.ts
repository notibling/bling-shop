import { useMemo, useState } from "react";
import { StringUtils } from "@/utils";

import { InternalBoardMenuItems } from "../constants";

function useFilterMenuItems() {
  const [search, setSearch] = useState<string>('');

  const menuItems = useMemo(() => {
    const data = InternalBoardMenuItems.filter(group => {
      const itemsLabels = group.items.map(item => StringUtils.normalize(item.label.toLowerCase()));
      const itemsMatch = itemsLabels.some(label =>
        label.includes(StringUtils.normalize(search.toLowerCase())
        ))
      const groupMatch = group.label.toLowerCase()
        .includes(StringUtils.normalize(search).toLowerCase())

      return itemsMatch || groupMatch
    }).map((group) => {
      const { items } = group;

      const resultItems = items.sort((a, b) => {
        const normalizedA = StringUtils.normalize(a.label.toLowerCase());
        const normalizedB = StringUtils.normalize(b.label.toLowerCase());
        const normalizedSearch = StringUtils.normalize(search.toLowerCase());

        let a_score = 0;
        let b_score = 0;


        if (normalizedA.includes(normalizedSearch))
          a_score = 1;
        else a_score = -1;

        if (normalizedB.includes(normalizedSearch))
          b_score = 1
        else b_score = -1;

        return b_score - a_score
      })

      return { ...group, items: resultItems }
    })

    return data;
  }, [search])

  return { menuItems, search, setSearch };
}

export { useFilterMenuItems };