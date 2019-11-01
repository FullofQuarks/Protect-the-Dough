import { SiteState } from '@common/state/site.state';
import { UserState } from '@common/state/user.state';

export interface State {
    site: SiteState;
    user: UserState;
}
