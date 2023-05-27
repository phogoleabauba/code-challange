import { Badge } from "./Badge";

export interface User {
    badge_counts: Badge;
    account_id: number;
    is_employee: boolean;
    last_modified_date: number;
    last_access_date: number;
    reputation_change_year: number;
    reputation_change_quarter: number;
    reputation_change_month: number;
    reputation_change_week: number;
    reputation_change_day: number;
    reputation: number;
    creation_date: number;
    user_type: string;
    user_id: number;
    website_url: string;
    link: string;
    profile_image: string;
    display_name: string;
    location: string;
    isBlocked: boolean;
    isFollowed: boolean;
}