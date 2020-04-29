const _schema = {
    Hostname: {
        type: String,
        table: {
            label: 'Host Name'
        }
    },
    OS: {
        type: Object,
        table: true
    },
    IPAddress: {
        type: String,
        table: {
            label: 'IP Address'
        }
    },
    LifeCycleStatus: {
        type: String,
        table: {
            label: 'Status',
            sortable: true
        }
    },
    Environment: {
        type: String,
        table: {
            cssClass: (data) => {
                return data.Environment;
            }
        }
    },
    Network: {
        type: String,
        table: true
    }
};

export default class Component {
    static schema() {
        return _schema;
    }
}
