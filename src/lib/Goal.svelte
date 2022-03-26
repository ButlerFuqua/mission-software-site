<script>
    export let goal;

    let percentage = Math.floor((goal.raised / goal.total) * 100);

    const returnStyles = () => {
        return `width:${percentage}%`;
    };
</script>

<div class="goal">
    <p>
        {goal.name}
    </p>
    <div class="percentage">
        <small>{percentage}%</small>
        <div class="progressContainer">
            <div style={returnStyles()} />
        </div>
    </div>
</div>

<style>
    .goal {
        padding: 0.5rem;
        margin: 0.5rem;
    }

    .progressContainer {
        border: none;
        border-radius: 1rem;
        height: 1rem;
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
        background-color: var(--grey-1);
        margin-left: 5px;
    }

    .progressContainer div {
        border: none;
        height: 100%;
        background-color: var(--neat-red);
        max-width: 100% !important;
    }
    .percentage {
        display: flex;
    }
    .percentage small {
        color: var(--primary-color);
    }
</style>
