<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th :key="idx" v-for="(head, idx) in heads">{{head}}</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(row, idx) in rows">
                    <td :key="idx" v-for="(data, idx) in row">{{data}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        heads: {
            type: Array,
            default: function() {
                return [];
            }
        },
        rows: {
            type: Object,
            default: function() {
                return { row: {} };
            }
        }
    }
};
</script>

<style lang="scss" scoped>
table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    th {
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: 400;
        padding: 15px;
        &:first-child {
            padding-left: 10px;
        }
        border-bottom: 1px solid #dcdfe6;
    }
    td {
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
        &:first-child {
            padding-left: 10px;
        }
    }
}
</style>