<template>
    <div class="theme">
        <h1>{{$t('themeSection.themeTitle')}}</h1>
        <ThemeBlock
            key-color="#38ada9"
            font-color="#303133"
            :name="$t('themeSection.themeName')"
            :type="$t('themeSection.themeType')"
            :author="$t('themeSection.themeAuthor')"
        />
    </div>
</template>

<script>
import ThemeBlock from "../components/ThemeBlock";

export default {
    components: { ThemeBlock }
};
</script>