export const PHYSICS_STEP = 1 / 120;
export const defaultPhysics = { frequency: 2, dampingRatio: 1, repulsion: 1, airDrag: 3, iterations: 6 };
export type PhysicsSettings = typeof defaultPhysics;

