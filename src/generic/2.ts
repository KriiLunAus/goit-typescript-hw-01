type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type top = Pick<AllType, "name" | "color">;
type bottom = Pick<AllType, "position"| "weight">


function compare (top:top, bottom:bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}