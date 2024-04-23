import axios from '../axios'

interface SignatureRequest {
  walletAddress: string
  signature: string
  signContent: string
}

export const isFollowedTwitter = async (data: SignatureRequest) => {
  return await axios<boolean>({
    method: 'POST',
    url: '/point/twitter/check',
    data
  })
}

export const getTwitterAuthorizationUrl = async (data: SignatureRequest) => {
  return await axios<string>({
    method: 'POST',
    url: '/twitter/authorization/url',
    data
  })
}

interface TwitterCallback {
  code: string
  state: string
}

export const sendTwitterCallback = async (data: TwitterCallback) => {
  return await axios<boolean>({
    method: 'POST',
    url: '/twitter/callback',
    data
  })
}

export const isFollowedDiscord = async (data: SignatureRequest) => {
  return await axios<boolean>({
    method: 'POST',
    url: '/point/discord/check',
    data
  })
}

export const getDiscordAuthorizationUrl = async (data: SignatureRequest) => {
  return await axios<string>({
    method: 'POST',
    url: '/discord/authorization/url',
    data
  })
}

interface DiscordCallback {
  code: string
  state: string
}

export const sendDiscordCallback = async (data: DiscordCallback) => {
  return await axios<boolean>({
    method: 'POST',
    url: '/discord/callback',
    data
  })
}

interface Pagination {
  page: number
  pagesize: number
}

export interface AccountListItem {
  walletAddress: string
  point: string
  rank: string
}

export const retrieveTopAccountList = async (params: Pagination) => {
  return await axios<{
    accountList: AccountListItem[]
    total: number
  }>({
    url: '/point/account/top',
    params
  })
}

export const retrieveAccountInfo = async (data: SignatureRequest) => {
  return await axios<{
    point: string
    rank: string
    inviteCode: string
  }>({
    url: '/point/account',
    method: 'POST',
    data
  })
}

export const createInvitationRelationship = async (data: SignatureRequest & { inviteCode: string }) => {
  return await axios({
    url: '/point/invitation',
    method: 'POST',
    data
  })
}

export interface PointLog {
  type: string
  point: string
  createTime: string
  walletAddress: string
}

export const retrieveAccountPointLogs = async (data: SignatureRequest & Pagination) => {
  return await axios<{
    totalCount: number
    list: PointLog[]
  }>({
    url: '/point/account/log',
    method: 'POST',
    data
  })
}
