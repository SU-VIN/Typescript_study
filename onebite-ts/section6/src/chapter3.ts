/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//implements == 구현한다
//즉 캐릭터클래스틑 캐릭터 인터페이스를 구현한다
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {}
}
