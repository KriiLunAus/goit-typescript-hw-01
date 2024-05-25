export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserRoleSt = Record<UserRole, string>;


const RoleDescription: UserRoleSt = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};