import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { PURGE_EXPIRED_CONTENTS } from '../../../constants/CacheConstants';

export default function purgeExpiredContentsAction(payload) {
    if (payload && payload.purged) {
        return { type: PURGE_EXPIRED_CONTENTS + SUCCESS };
    } else if (payload && payload.purged === false) {
        return { type: PURGE_EXPIRED_CONTENTS + FAILURE };
    }
    return { type: PURGE_EXPIRED_CONTENTS };
}
